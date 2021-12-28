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


// Vowel listen
document.getElementById("btn-lisen-vowel-a").addEventListener("click", function() {
    artyom.say("aa");
}, false);
document.getElementById("btn-lisen-vowel-e").addEventListener("click", function() {
    artyom.say("eeee");
}, false)
document.getElementById("btn-lisen-vowel-i").addEventListener("click", function() {
    artyom.say("ii");
}, false);
document.getElementById("btn-lisen-vowel-o").addEventListener("click", function() {
    artyom.say("o");
}, false)
document.getElementById("btn-lisen-vowel-u").addEventListener("click", function() {
    artyom.say("uu");
}, false);



