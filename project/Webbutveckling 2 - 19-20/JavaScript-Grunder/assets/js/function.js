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

 var stop8tn = document.getElementsByClassName("button")[0];
 stop8tn.addEventListener("mouseenter", function() {
     clearInterval(myTime, 1000);
     alert("The timer has stopped!");
 });



 stop8tn.addEventListener("mouseleave", function() {
     myTime = setInterval(myTimer, 1000);
     alert("The time is running again!");
 });

 function calculateTip(total) {
     var tipPercent = Math.floor(billTotal * 0.15);
     return total = tipPercent;
 }

 var billTotal = prompt("Quanto Costa?");
 var billTip = calculateTip(billTotal);
 var receipt = "Bill total: " + billTotal + ":- Tip: " + billTip + ":-";
 var displayBill = document.getElementsByClassName("displayBill") [0];
 displayBill.innerHTML = receipt; 

 var jobArray = ["succesfull youtuber", "slave", "office worker", "succesfull actor", "dumpster collector"];
 var locArray = ["malå", "hollywood", "india", "america", "sweden", "every country"];
 var partnerArray = ["Scarlet Johansson", "Jennifer Lawrance", "Megan Fox", "97 year old Berta that needs help changing her diaper", "a homeless person, maybe a guy, hard to tell, without a name", "Sven, 70 years old", "Ricardo", "Astolfo", "any trap"];
 var childrenArray = ["6", "0", "43", "1", "2", "3", "4", "5", "11", "13"]

 function tellFortune(jobArray, locArray, partnerArray, childrenArray) {
     var displayFuture = document.getElementsByClassName("fortune") [0];
     var tellFuture = "You will be a " + jobArray[Math.floor(Math.random() * jobArray.length)] + " in " + locArray[Math.floor(Math.random() * locArray.length)] + " and will be married to " + partnerArray[Math.floor(Math.random() * partnerArray.length)] + " and you will have " +  childrenArray[Math.floor(Math.random() * childrenArray.length)] + " children";

     displayFuture.innerHTML = tellFuture;
 }

 tellFortune(jobArray, locArray, partnerArray, childrenArray)

 var refreshFortune = document.getElementsByClassName("button2") [0];
 refreshFortune.addEventListener("click", function() {
    tellFortune(jobArray, locArray, partnerArray, childrenArray)
 })

 var puppyAge = prompt("How old is your dog in human years?")
 function calculateDogYears(puppyAge) {
    var displayDogYears = document.getElementsByClassName("dogge") [0];
    var dogYears = puppyAge * 7;
    var tellDogYears = "Your dog is " + dogYears + " in dog years"
    
    displayDogYears.innerHTML = tellDogYears; 
 }



 calculateDogYears(puppyAge)

 var snack = String(prompt("What type of snack would you like to eat for the rest of your life"))
 var snackNumPerDay = (prompt("How many " + snack + " do you need for one day?"))
 var howOld = (prompt("How old do you think you'll be?"))

function calculateSupply () {
    var displaySupply = document.getElementsByTagName("p") [4];
    var yearSupply = snackNumPerDay * (howOld * 365);
    var tellSupply = "You'll need " + yearSupply + " " + snack + " to survive your whole life!";
    displaySupply.innerHTML = tellSupply;
}

calculateSupply(snack, snackNumPerDay, howOld)
var displayHiddenWord = document.getElementsByTagName("p") [5];
var hiddenWord = ["G", "O", "A", "T"];
var hiddenWordUnderline = ["_", "_", "_", "_"];

// function()

displayHiddenWord.innerHTML = hiddenWordUnderline;

document.onkeypress = function(event) {
    var myGuess = event.which;
    var displayKey = document.getElementsByClassName("guess") [0];
    displayKey.innerHTML = "The letter you pressed is: " + myGuess;
}
    




// document.getElementsByClassName("ahoga").innerHTML = hiddenWord;
