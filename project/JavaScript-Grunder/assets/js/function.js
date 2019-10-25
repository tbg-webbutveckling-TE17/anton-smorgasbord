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

function localScope() {
    var showScope = 31;
    console.log(showScope)
}

localScope();
console.log(showScope);

var showScope = "I'm a global variable";
console.log(showScope);

var showGlobalVar = 99;
function globalScope() {
    showGlobalVar = 100;
    console.log(showGlobalVar)
}

console.log(showGlobalVar)
globalScope()
console.log(showGlobalVar)

function hi() {
    var name = "Faggot"
    console.log()
}

hi()

function bye() {
    console.log(name)
}

function sing() {
    console.log("I'm singing in the rain")
    console.log("Just singing in the rain")
    console.log("What a glorious feeling")
}

fisk = setInterval(sing, 1000);
clearInterval(fisk);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

 var anon = setInterval(function() {
     console.log("I'm an anonomous function")
 }, 1500);

 clearInterval(anon)

 function myTimer() {
     var d = new Date();
     var time = d.toLocaleTimeString();
     document.getElementById("timeOutput").innerHTML = time;

 }

 myTimer();

 var myTime = setInterval(myTimer, 1000)