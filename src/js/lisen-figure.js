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
let figureSquare = document.getElementById("btn-lisen-figure-square");
let figureCircle = document.getElementById("btn-lisen-figure-circle");
let figureTriangle = document.getElementById("btn-lisen-figure-triangle");
let figureRectangle = document.getElementById("btn-lisen-figure-rectangle");
let figureDiamond = document.getElementById("btn-lisen-figure-diamond");
let figureStar = document.getElementById("btn-lisen-figure-star");

figureSquare.addEventListener("click", function() {
    artyom.say("Cuadrado");
    figureSquare.classList.toggle('backgroundActive'); 
}, false);
document.getElementById("btn-lisen-figure-circle").addEventListener("click", function() {
    artyom.say("Circulo");
    figureCircle.classList.toggle('backgroundActive');
}, false)
document.getElementById("btn-lisen-figure-triangle").addEventListener("click", function() {
    artyom.say("Triángulo");
    figureTriangle.classList.toggle('backgroundActive');
}, false);
document.getElementById("btn-lisen-figure-rectangle").addEventListener("click", function() {
    artyom.say("Rectángulo");
    figureRectangle.classList.toggle('backgroundActive');
}, false)
document.getElementById("btn-lisen-figure-diamond").addEventListener("click", function() {
    artyom.say("Rombo");
    figureDiamond.classList.toggle('backgroundActive');
}, false);
document.getElementById("btn-lisen-figure-star").addEventListener("click", function() {
    artyom.say("Estrella");
    figureStar.classList.toggle('backgroundActive');
}, false);
