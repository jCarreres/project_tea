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


// Color listen
let colorRed = document.getElementById("btn-lisen-color-red");
let colorBlue = document.getElementById("btn-lisen-color-blue");
let colorYellow = document.getElementById("btn-lisen-color-yellow");
let colorGreen = document.getElementById("btn-lisen-color-green");
let colorPink = document.getElementById("btn-lisen-color-pink");
let colorBrown = document.getElementById("btn-lisen-color-brown");
let colorBlack = document.getElementById("btn-lisen-color-black");
let colorWhite = document.getElementById("btn-lisen-color-white");
let colorOrange = document.getElementById("btn-lisen-color-orange");
let colorPurple = document.getElementById("btn-lisen-color-purple");
let colorGrey = document.getElementById("btn-lisen-color-grey");

colorRed.addEventListener("click", function(    ) {
    artyom.say("Rojo");
    colorRed.classList.toggle('borderActive'); 
}, false);
colorBlue.addEventListener("click", function() {
    artyom.say("Azul");
    colorBlue.classList.toggle('borderActive'); 
}, false)
colorYellow.addEventListener("click", function() {
    artyom.say("Amarillo");
    colorYellow.classList.toggle('borderActive'); 
}, false);
colorGreen.addEventListener("click", function() {
    artyom.say("Verde");
    colorGreen.classList.toggle('borderActive'); 
}, false)
colorPink.addEventListener("click", function() {
    artyom.say("Rosa");
    colorPink.classList.toggle('borderActive'); 
}, false);
colorBrown.addEventListener("click", function() {
    artyom.say("Marrón");
    colorBrown.classList.toggle('borderActive'); 
}, false);
colorBlack.addEventListener("click", function() {
    artyom.say("Negro");
    colorBlack.classList.toggle('borderActive'); 
}, false)
colorWhite.addEventListener("click", function() {
    artyom.say("Blanco");
    colorWhite.classList.toggle('borderActive'); 
}, false);
colorOrange.addEventListener("click", function() {
    artyom.say("Naranja");
    colorOrange.classList.toggle('borderActive'); 
}, false)
colorPurple.addEventListener("click", function() {
    artyom.say("Lila");
    colorPurple.classList.toggle('borderActive'); 
}, false);
colorGrey.addEventListener("click", function() {
    artyom.say("Gris");
    colorGrey.classList.toggle('borderActive'); 
}, false)
