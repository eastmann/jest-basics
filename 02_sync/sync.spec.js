const Lodash = require('./sync')
const _ = new Lodash()

describe('Lodash: compact:', () => {
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello']
    })

    test('Should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('SHould working array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('Should NOT containe falsy values', () => {
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(false)
    })

    test('Should remove falsy values from array', () => {
        const result = [42, true, 'hello']

        expect(_.compact(array)).toEqual(result)
    })
})

describe('Lodash: groupBy:', () => {
    test('Should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('Should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            3: [3.1],
            4: [4.2]
        }

        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('Should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }

        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('Should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})
