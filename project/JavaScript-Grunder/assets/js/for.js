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

console.log()

var rows = 5;
var cols = 5;



for(var i = 1; i <= 10; i++) {
    for(var ii = 0; ii <= 10; ii++) {
        document.writeln(i + "*" + ii + "=" + i * ii + "<br/>")
    }
    document.writeln("<br/>")

}

var choices = ["Hamburgare", "Tacos", "Stuvade makaroner med falukorv", "Pizza", "Fiskepinne with potatomoesees", "Korvmedsvängdörr", "Inte vet jag längre"];

for(i = 1; i <= choices.length; i++) {
        if(i == 1){
            document.writeln("My " + i + "st" + " Food is " + choices[i-1]);
        } else if(i == 2){
            document.writeln("My " + i + "nd" + " Food is " + choices[i-1]);
        } else if(i == 3) {
            document.writeln("My " + i + "rd" + " Food is " + choices[i-1]);
        } else{
            document.writeln("My " + i + "th" + " Food is " + choices[i-1]);
        }

        document.writeln("<br/>");
    }
    
for(var i = 10; i > 0; i--) {
    for(var ii = 10; ii <= i; i++) {
        document.writeln("* ")
    }
}

