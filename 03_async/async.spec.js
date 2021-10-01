const Ajax = require('./async')

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
