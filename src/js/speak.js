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


// Menu listen
document.getElementById("btn-speak-vowel").addEventListener("click", function() {
    artyom.say("Las vocales");
}, false);

document.getElementById("btn-speak-numbers").addEventListener("click", function() {
    artyom.say("Los números");
}, false);

document.getElementById("btn-speak-colors").addEventListener("click", function() {
    artyom.say("Los colores");
}, false)

document.getElementById("btn-speak-figures").addEventListener("click", function() {
    artyom.say("Las formas");
}, false)

document.getElementById("btn-speak-alphabet").addEventListener("click", function() {
    artyom.say("El abcdario");
}, false)


