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