// for använder man när man ver hur många gånger loopen ska köras

// initiering; villkor; inkrementering
for(var i = 0; i < 6; i++) {
    // Kör koden för varje iteration
    console.log(i);

}

var str = "Hello World!";

for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log();

var myArr = ["HTML", "CSS","JS", 42, true];
var len = myArr.length;
for (var i = 0; i < len; i++) {
    console.log(myArr[i]); 
}

console.log()

// Task 1
for(var i = -10; i <= 19; i++) {
    console.log(i)
}

console.log()

// Task 2
for(var i = 10; i <= 40; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// Task 3 
for(i = 300; i <= 333; i++) {
    if(i % 2 !== 0 ) {
        console.log(i)

    }
}

console.log()

for(var i = 5; i <= 50; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}