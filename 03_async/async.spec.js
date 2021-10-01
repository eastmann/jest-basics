const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

describe('Ajax: echo', () => {
    test('Should return value Async', async () => {
        const data = 'some data'
        const result = await Ajax.echo(data)
        expect(result).toBe(data)
    })

    test('Should catch error Async', async () => {
        try {
            await Ajax.echo()
        } catch(e) {
            expect(e.message).toBe('error')
        }
    })

    test('Should return value with Promise', () => {
        return Ajax.echo('some data').then(data => {
            expect(data).toBe('some data')
        })
    })

    test('Should catch error with Promise', () => {
        return Ajax.echo().catch(err => {
            expect(err).toBeInstanceOf(Error)
        })
    })
})

describe('Ajax: GET', () => {
    let todos
    let response

    beforeEach(() => {
        todos = [
            { id: 1, title: 'Todo 1', completed: false  }
        ]

        response = {
            data: {
                todos
            }
        }
    })

    test('Should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})
