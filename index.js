// Add your functions here

function map(array, funct) {
    let x = []
    for (let i = 0; i < array.length; i++) {
        let elem = array[i]
        x.push(funct(elem))
    }
    return x
}

function reduce(array, funct, start) {
    let total  
        if (start) {
            total = start
           for (let i = 0; i < array.length; i++) {
               total = funct(array[i], total)
           }
        }
        else {
            total = array[0]
           for (let i = 1; i < array.length; i++) {
               total = funct(array[i], total)
           }
        }
            return total
}
