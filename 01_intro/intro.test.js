const { sum, nativeNull } = require('./intro')

describe('Sum function:', () => {
    test('Should return the sum of two values', () => {
        expect(sum(1, 3)).toBe(4)    // Primitives
        expect(sum(1, 3)).toEqual(4) // Objects, Arrays,...
    })

    test('Should return correct compare result', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
    })

    test('Should sum two float values correctly', () =>{
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Native null function:', () => {
    test('Should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, ''
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeUndefined()
    })
})
