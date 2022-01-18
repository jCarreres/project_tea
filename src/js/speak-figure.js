
// Number listen
let answerSuccessful = 'Si, muy bien';
let speakFigureSquare = document.getElementById("btn-speak-figure-square");
let speakFigureCircle = document.getElementById("btn-speak-figure-circle");
let speakFigureTriangle = document.getElementById("btn-speak-figure-triangle");
let speakFigureRectangle = document.getElementById("btn-speak-figure-rectangle");
let speakFigureDiamond = document.getElementById("btn-speak-figure-diamond");
let speakFigureStar = document.getElementById("btn-speak-figure-star");

speakFigureSquare.addEventListener("click", function() {
    speakFigureSquare.classList.toggle('backgroundActive'); 
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("¿Soy un?");
    artyom.addCommands([
        {
            indexes:["cuadrado"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureSquare.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);

speakFigureCircle.addEventListener("click", function() {
    speakFigureCircle.classList.toggle('backgroundActive'); 
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("¿Soy un?");
    artyom.addCommands([
        {
            indexes:["círculo"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureCircle.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);

speakFigureTriangle.addEventListener("click", function() {
    speakFigureTriangle.classList.toggle('backgroundActive');
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    }); 
    artyom.say("¿Soy un?");
    artyom.addCommands([
        {
            indexes:["triángulo"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureTriangle.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);

speakFigureRectangle.addEventListener("click", function() {
    speakFigureRectangle.classList.toggle('backgroundActive'); 
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    }); 
    artyom.say("¿Soy un?");
    artyom.addCommands([
        {
            indexes:["rectángulo"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureRectangle.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);

speakFigureDiamond.addEventListener("click", function() {
    speakFigureDiamond.classList.toggle('backgroundActive'); 
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    }); 
    artyom.say("¿Soy un?");
    artyom.addCommands([
        {
            indexes:["rombo"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureDiamond.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);

speakFigureStar.addEventListener("click", function() {
    speakFigureStar.classList.toggle('backgroundActive'); 
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    }); 
    artyom.say("¿Soy una?");
    artyom.addCommands([
        {
            indexes:["estrella"],
            action:function(i) {
                if( i == 0) {
                    artyom.say(answerSuccessful);
                    speakFigureStar.classList.toggle('backgroundActive'); 
                } 
            }
        }
    ])
}, false);
