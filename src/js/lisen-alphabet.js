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


// Alphabet listen
document.getElementById("btn-lisen-alphabet-a").addEventListener("click", function() {
    artyom.say("a");
}, false);
document.getElementById("btn-lisen-alphabet-b").addEventListener("click", function() {
    artyom.say("b");
}, false)
document.getElementById("btn-lisen-alphabet-c").addEventListener("click", function() {
    artyom.say("c");
}, false);
document.getElementById("btn-lisen-alphabet-d").addEventListener("click", function() {
    artyom.say("d");
}, false)
document.getElementById("btn-lisen-alphabet-e").addEventListener("click", function() {
    artyom.say("e");
}, false);
document.getElementById("btn-lisen-alphabet-f").addEventListener("click", function() {
    artyom.say("f");
}, false);
document.getElementById("btn-lisen-alphabet-g").addEventListener("click", function() {
    artyom.say("g");
}, false)
document.getElementById("btn-lisen-alphabet-h").addEventListener("click", function() {
    artyom.say("h");
}, false);
document.getElementById("btn-lisen-alphabet-i").addEventListener("click", function() {
    artyom.say("i");
}, false)
document.getElementById("btn-lisen-alphabet-j").addEventListener("click", function() {
    artyom.say("j");
}, false);
document.getElementById("btn-lisen-alphabet-k").addEventListener("click", function() {
    artyom.say("k");
}, false);
document.getElementById("btn-lisen-alphabet-l").addEventListener("click", function() {
    artyom.say("l");
}, false)
document.getElementById("btn-lisen-alphabet-m").addEventListener("click", function() {
    artyom.say("m");
}, false);
document.getElementById("btn-lisen-alphabet-n").addEventListener("click", function() {
    artyom.say("n");
}, false)
document.getElementById("btn-lisen-alphabet-o").addEventListener("click", function() {
    artyom.say("o");
}, false);
document.getElementById("btn-lisen-alphabet-p").addEventListener("click", function() {
    artyom.say("p");
}, false);
document.getElementById("btn-lisen-alphabet-q").addEventListener("click", function() {
    artyom.say("q");
}, false)
document.getElementById("btn-lisen-alphabet-r").addEventListener("click", function() {
    artyom.say("r");
}, false);
document.getElementById("btn-lisen-alphabet-s").addEventListener("click", function() {
    artyom.say("s");
}, false)
document.getElementById("btn-lisen-alphabet-t").addEventListener("click", function() {
    artyom.say("t");
}, false);
document.getElementById("btn-lisen-alphabet-u").addEventListener("click", function() {
    artyom.say("u");
}, false);
document.getElementById("btn-lisen-alphabet-v").addEventListener("click", function() {
    artyom.say("v");
}, false)
document.getElementById("btn-lisen-alphabet-w").addEventListener("click", function() {
    artyom.say("w");
}, false);
document.getElementById("btn-lisen-alphabet-x").addEventListener("click", function() {
    artyom.say("x");
}, false)
document.getElementById("btn-lisen-alphabet-y").addEventListener("click", function() {
    artyom.say("y griega");
}, false);
document.getElementById("btn-lisen-alphabet-z").addEventListener("click", function() {
    artyom.say("z");
}, false);
