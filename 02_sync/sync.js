class Lodash {
    compact(array) {
        return array.filter(item => !!item)
    }

    groupBy(array, prop) {
        return array.reduce((acc, curr) => {
            const key = typeof prop === 'function' ? prop(curr) : curr[prop]

            if (!(key in acc)) {
                acc[key] = []
            }
            acc[key].push(curr)

            return acc
        }, {})
    }
}

module.exports = Lodash
