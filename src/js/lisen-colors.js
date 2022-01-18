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
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Rojo");
    colorRed.classList.toggle('borderActive'); 
}, false);
colorBlue.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Azul");
    colorBlue.classList.toggle('borderActive'); 
}, false)
colorYellow.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Amarillo");
    colorYellow.classList.toggle('borderActive'); 
}, false);
colorGreen.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Verde");
    colorGreen.classList.toggle('borderActive'); 
}, false)
colorPink.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Rosa");
    colorPink.classList.toggle('borderActive'); 
}, false);
colorBrown.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Marrón");
    colorBrown.classList.toggle('borderActive'); 
}, false);
colorBlack.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Negro");
    colorBlack.classList.toggle('borderActive'); 
}, false)
colorWhite.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Blanco");
    colorWhite.classList.toggle('borderActive'); 
}, false);
colorOrange.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Naranja");
    colorOrange.classList.toggle('borderActive'); 
}, false)
colorPurple.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Lila");
    colorPurple.classList.toggle('borderActive'); 
}, false);
colorGrey.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Gris");
    colorGrey.classList.toggle('borderActive'); 
}, false)
