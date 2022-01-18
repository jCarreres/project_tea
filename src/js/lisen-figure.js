
// Number listen
let figureSquare = document.getElementById("btn-lisen-figure-square");
let figureCircle = document.getElementById("btn-lisen-figure-circle");
let figureTriangle = document.getElementById("btn-lisen-figure-triangle");
let figureRectangle = document.getElementById("btn-lisen-figure-rectangle");
let figureDiamond = document.getElementById("btn-lisen-figure-diamond");
let figureStar = document.getElementById("btn-lisen-figure-star");

figureSquare.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Cuadrado");
    figureSquare.classList.toggle('backgroundActive'); 
}, false);

figureCircle.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Circulo");
    figureCircle.classList.toggle('backgroundActive');
}, false);

figureTriangle.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Triángulo");
    figureTriangle.classList.toggle('backgroundActive');
}, false);

figureRectangle.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Rectángulo");
    figureRectangle.classList.toggle('backgroundActive');
}, false);

figureDiamond.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Rombo");
    figureDiamond.classList.toggle('backgroundActive');
}, false);

figureStar.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("Estrella");
    figureStar.classList.toggle('backgroundActive');
}, false);
