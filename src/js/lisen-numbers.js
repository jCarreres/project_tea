let artyom = new Artyom();

// Start the commands !
artyom.initialize({
    lang: "es-ES", // GreatBritain english
    continuous: true, // Listen forever
    soundex: true, // Use the soundex algorithm to increase accuracy
    debug: true, // Show messages in the console
    executionKeyword: "and do it now",
    listen: true, // Start to listen commands !

    // If providen, you can only trigger a command if you say its name
    // e.g to trigger Good Morning, you need to say "Jarvis Good Morning"
    //name: "Jarvis"
}).then(() => {
    console.log("Artyom has been succesfully initialized");
}).catch((err) => {
    console.error("Artyom couldn't be initialized: ", err);
});


// Number listen
let number1 = document.getElementById("btn-lisen-number-1");
let number2 = document.getElementById("btn-lisen-number-2");
let number3 = document.getElementById("btn-lisen-number-3");
let number4 = document.getElementById("btn-lisen-number-4");
let number5 = document.getElementById("btn-lisen-number-5");
let number6 = document.getElementById("btn-lisen-number-6");
let number7 = document.getElementById("btn-lisen-number-7");
let number8 = document.getElementById("btn-lisen-number-8");
let number9 = document.getElementById("btn-lisen-number-9");
let number10 = document.getElementById("btn-lisen-number-10");
let number11 = document.getElementById("btn-lisen-number-11");
let number12 = document.getElementById("btn-lisen-number-12");
let number13 = document.getElementById("btn-lisen-number-12");
let number14 = document.getElementById("btn-lisen-number-12");



number1.addEventListener("click", function() {
    artyom.say("1");
    number1.classList.toggle('backgroundActive'); 
}, false);
number2.addEventListener("click", function() {
    artyom.say("2");
    number2.classList.toggle('backgroundActive'); 
}, false)
number3.addEventListener("click", function() {
    artyom.say("3");
    number3.classList.toggle('backgroundActive'); 
}, false);
number4.addEventListener("click", function() {
    artyom.say("4");
    number4.classList.toggle('backgroundActive'); 
}, false)
number5.addEventListener("click", function() {
    artyom.say("5");
    number5.classList.toggle('backgroundActive'); 
}, false);
number6.addEventListener("click", function() {
    artyom.say("6");
    number6.classList.toggle('backgroundActive'); 
}, false);
number7.addEventListener("click", function() {
    artyom.say("7");
    number7.classList.toggle('backgroundActive'); 
}, false)
number8.addEventListener("click", function() {
    artyom.say("8");
    number8.classList.toggle('backgroundActive'); 
}, false);
number9.addEventListener("click", function() {
    artyom.say("9");
    number9.classList.toggle('backgroundActive'); 
}, false)
number10.addEventListener("click", function() {
    artyom.say("10");
    number10.classList.toggle('backgroundActive'); 
}, false);
number11.addEventListener("click", function() {
    artyom.say("11");
    number11.classList.toggle('backgroundActive'); 
}, false)
number12.addEventListener("click", function() {
    artyom.say("12");
    number12.classList.toggle('backgroundActive'); 
}, false);
number13.addEventListener("click", function() {
    artyom.say("13");
    number13.classList.toggle('backgroundActive'); 
}, false);
number14.addEventListener("click", function() {
    artyom.say("14");
    number14.classList.toggle('backgroundActive'); 
}, false);