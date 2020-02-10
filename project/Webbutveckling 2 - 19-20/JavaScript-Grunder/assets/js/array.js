var friend1 = "Måns";
var friend2 = "Sten";
var friend3 = "Clearence";
var friend4 = "Mona";

// array in global scope
var friends = ["Måns", "Sten", "Clearence", "Mona"];
var printToScreen = document.getElementsByClassName("testArray") [0];
printToScreen.innerHTML = friends[0];

function newName() {
    friends[1] = "Patrik";
}

// create an array in different ways
var colors = []; // standard
var colors = new Array(); // not that common
var randomArray = ["hej", 21, false, true, {}];
printToScreen.innerHTML = randomArray.length;

// array built-in methods
colors = ["red", "green", "blue"];

// Describe the result string of an array
printToScreen.innerHTML = colors.join("<br/>");

// pop() - remove an item at the end of an array
colors.pop();
printToScreen.innerHTML = colors.join("<br/>");

// push() - add an item at the end of an array
colors.push("purple");
printToScreen.innerHTML = colors.join("<br/>");

// unshift - add an item to the beginning to an array
colors.unshift("yellow");
printToScreen.innerHTML = colors.join("<br/>");

// shift - remove an item at the beginning of an array
colors.shift();
printToScreen.innerHTML = colors.join("<br/>");

// slice() - copy parts of an array
var colorGreen = colors.slice(1,2);
printToScreen.innerHTML = colorGreen;

// indexOf - find the index of an item in the array
printToScreen.innerHTML = colors.indexOf("green");
printToScreen.innerHTML = colors.indexOf("green");

var cars = ["Audi A6", "Volvo 940", "Ford Mondeo", "Ferrari", "Landa", "Lada", "Citroên"]
for(var i = 0; i < cars.length; i++) {
    printToScreen.innerHTML += cars[i] + "<br/>";
}

// reverse() - reverse the items in an array
printToScreen.innerHTML = cars.reverse();

var countries = ["sweden", "norway", "finland", "denmark", "island"];
countries.forEach(function(country) {
    printToScreen.innerHTML += country + "<br/>"
})

printToScreen.innerHTML = "";
var planets = ["earth", "mars", "saturnus", "jupiter"];
planets.forEach(function(planet) {
    printToScreen.innerHTML += planet + " - ";
});

printToScreen.innerHTML = "";
var number = [1, 32, 44, 112, 3, 5, 6, 9, 12];
var color = ["red", "green", "blue", "yellow"];

number.forEach(function(num) {
    if(num % 3 === 0) {
        printToScreen.innerHTML += num + " ";
    }
});

for(var i = 0; i < number.length; i++) {
    if(number[i] & 3 === 0) {
        printToScreen.innerHTML += number[i] + " ";
    }
}

var foods = ["sausage", "meatballs", "pasta", "pizza"];
foods.forEach(function(food) {
    printToScreen.innerHTML += food + " ";
});

printToScreen.innerHTML = "";

function printReverse(numbersers) {
    var newArray = [];
    for(var i = numbersers.length - 1; i >= 0; i--) {
        newArray.push(numbersers[i]);
        printToScreen.innerHTML = newArray.join("<br/>");

    }
    

};

var numbersers = [1, 2, 3, 4, 5, 6, 7];
printReverse(numbersers);
printToScreen.innerHTML = "";

function isIdentical(array) {
    for(var i = 1; i <= array.length - 1; i++) {
        if(array[i] !== array[0]) {
            return false
        }
    }

    return true
}

isIdentical([1,1,1,1,1,1,1,1,1]);
isIdentical([1,1,1,1,2,1,1,1,1]);

function sumArray(array) {
    var number = 0;
    for(var i = 0; i <= array.length - 1; i++) {
        number = number + array[i];
    };

    printToScreen.innerHTML = number;

};

sumArray([1,2,3,4,5]);

function max(array) {
    var maxx = array[0];
    array.forEach(function(pogchamp){
        if(pogchamp > maxx){
            maxx = pogchamp;
        };
        
    });
    printToScreen.innerHTML = maxx;
    return maxx;
};

max([2, 1, 23, 54, 4, 12]);







