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
document.getElementById("btn-lisen-color-red").addEventListener("click", function() {
    artyom.say("Rojo");
}, false);
document.getElementById("btn-lisen-color-blue").addEventListener("click", function() {
    artyom.say("Azul");
}, false)
document.getElementById("btn-lisen-color-yellow").addEventListener("click", function() {
    artyom.say("Amarillo");
}, false);
document.getElementById("btn-lisen-color-green").addEventListener("click", function() {
    artyom.say("Verde");
}, false)
document.getElementById("btn-lisen-color-pink").addEventListener("click", function() {
    artyom.say("Rosa");
}, false);
document.getElementById("btn-lisen-color-brown").addEventListener("click", function() {
    artyom.say("Marrón");
}, false);
document.getElementById("btn-lisen-color-black").addEventListener("click", function() {
    artyom.say("Negro");
}, false)
document.getElementById("btn-lisen-color-white").addEventListener("click", function() {
    artyom.say("Blanco");
}, false);
document.getElementById("btn-lisen-color-orange").addEventListener("click", function() {
    artyom.say("Naranja");
}, false)
document.getElementById("btn-lisen-color-purple").addEventListener("click", function() {
    artyom.say("Lila");
}, false);
document.getElementById("btn-lisen-color-grey").addEventListener("click", function() {
    artyom.say("Gris");
}, false)
