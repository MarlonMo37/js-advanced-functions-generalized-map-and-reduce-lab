// Add your functions here

const map = function(array, callback) {
    const r = []

    for (let i = 0; i < array.length; i++) {
        r.push(callback(array[i]))
    }
    return r
}

const reduce = function(array, callback, startingValue) {
    let total = 0 
    if (startingValue) {
        total = startingValue
        for (let i = 0; i < array.length; i++){
            total = callback(array[i], total)
        }
        return total
    } else {
        total = array[0]
        for (let i = 1; i < array.length; i++){
            total = callback(array[i], total)
        }
        return total
    }
}