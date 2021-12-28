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
document.getElementById("btn-lisen-number-1").addEventListener("click", function() {
    artyom.say("1");
}, false);
document.getElementById("btn-lisen-number-2").addEventListener("click", function() {
    artyom.say("2");
}, false)
document.getElementById("btn-lisen-number-3").addEventListener("click", function() {
    artyom.say("3");
}, false);
document.getElementById("btn-lisen-number-4").addEventListener("click", function() {
    artyom.say("4");
}, false)
document.getElementById("btn-lisen-number-5").addEventListener("click", function() {
    artyom.say("5");
}, false);
document.getElementById("btn-lisen-number-6").addEventListener("click", function() {
    artyom.say("6");
}, false);
document.getElementById("btn-lisen-number-7").addEventListener("click", function() {
    artyom.say("7");
}, false)
document.getElementById("btn-lisen-number-8").addEventListener("click", function() {
    artyom.say("8");
}, false);
document.getElementById("btn-lisen-number-9").addEventListener("click", function() {
    artyom.say("9");
}, false)
document.getElementById("btn-lisen-number-10").addEventListener("click", function() {
    artyom.say("10");
}, false);
document.getElementById("btn-lisen-number-11").addEventListener("click", function() {
    artyom.say("11");
}, false)
document.getElementById("btn-lisen-number-12").addEventListener("click", function() {
    artyom.say("12");
}, false);