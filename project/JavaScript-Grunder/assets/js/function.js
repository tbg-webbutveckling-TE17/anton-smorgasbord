function isEven(num) {
    if(num % 2 == 0) {
        return true
    } else {
        return false
    }
}

isEven(10)

console.log(isEven(10))
console.log(isEven(13))

function kebabToSnake(kebab) {
    var myString = kebab.replace(/-/g, "_")
    
    return myString
}

kebabToSnake("I-am-a-kebab-cased-string")

console.log(kebabToSnake("I-am-a-kebab-cased-string"))