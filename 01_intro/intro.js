function expect(value) {
    return {

        toBe(exp) {
            if (value === exp) {
                console.log('Success')
            } else {
                console.error(`Value is ${value} but expecation is ${exp}`)
            }
        },

    }
}

const sum = (a, b) => a + b
const nativeNull = () => null

// expect((sum(41,2))).toBe(42)
// console.log(typeof expect((sum(41,2))))

module.exports = { sum, nativeNull }
