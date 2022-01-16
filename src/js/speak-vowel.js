var artyom = new Artyom();
    

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
    let answerSuccessful = 'Si, muy bien';
    let speakVowelA = document.getElementById("btn-speak-vowel-a");
    let speakVowelE = document.getElementById("btn-speak-vowel-e");
    let speakVowelI = document.getElementById("btn-speak-vowel-i");
    let speakVowelO = document.getElementById("btn-speak-vowel-o");
    let speakVowelU = document.getElementById("btn-speak-vowel-u");


    speakVowelA.addEventListener("click", function() {
        artyom.obey();
        speakVowelA.classList.toggle('backgroundActive'); 
        artyom.say("¿Que letra soy?");
        artyom.addCommands([
            {
                indexes:["aa", "la a", "la ha", "laa"],
                action:function(i) {
                    if( i == 0) {
                        artyom.say(answerSuccessful);
                        speakVowelA.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    } 
                    if( i == 1) {
                        artyom.say(answerSuccessful);
                        speakVowelA.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    } 
                    if( i == 2) {
                        artyom.say(answerSuccessful);
                        speakVowelA.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    } 
                    if( i == 3) {
                        artyom.say(answerSuccessful);
                        speakVowelA.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    } 
                }
            }
        ])
    }, false);

    speakVowelE.addEventListener("click", function() {
        artyom.obey();
        speakVowelE.classList.toggle('backgroundActive'); 
        artyom.say("¿Que letra soy?");
        artyom.addCommands([
            {
                indexes:["ee", "la e", "la he", "lae"],
                action:function(i) {
                    if( i == 0) {
                        artyom.say(answerSuccessful);
                        speakVowelE.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 1) {
                        artyom.say(answerSuccessful);
                        speakVowelE.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 2) {
                        artyom.say(answerSuccessful);
                        speakVowelE.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 3) {
                        artyom.say(answerSuccessful);
                        speakVowelE.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                }
            } 
        ])
    }, false);

    speakVowelI.addEventListener("click", function() {
        artyom.obey();
        speakVowelI.classList.toggle('backgroundActive'); 
        artyom.say("¿Que letra soy?");
        artyom.addCommands([
            {
                indexes:["ii", "la i", "la hi", "lai"],
                action:function(i) {
                    if( i == 0) {
                        artyom.say(answerSuccessful);
                        speakVowelI.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 1) {
                        artyom.say(answerSuccessful);
                        speakVowelI.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 2) {
                        artyom.say(answerSuccessful);
                        speakVowelI.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 3) {
                        artyom.say(answerSuccessful);
                        speakVowelI.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                }
            } 
        ])
    }, false);


    speakVowelO.addEventListener("click", function() {
        artyom.obey();
        speakVowelO.classList.toggle('backgroundActive'); 
        artyom.say("¿Que letra soy?");
        artyom.addCommands([
            {
                indexes:["oo", "la o", "la ho", "lao"],
                action:function(i) {
                    if( i == 0) {
                        artyom.say(answerSuccessful);
                        speakVowelO.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 1) {
                        artyom.say(answerSuccessful);
                        speakVowelO.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 2) {
                        artyom.say(answerSuccessful);
                        speakVowelO.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 3) {
                        artyom.say(answerSuccessful);
                        speakVowelO.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                }
            } 
        ])
    }, false);

    speakVowelU.addEventListener("click", function() {
        artyom.obey();
        speakVowelU.classList.toggle('backgroundActive'); 
        artyom.say("¿Que letra soy?");
        artyom.addCommands([
            {
                indexes:["uu", "la u", "la hu", "lau"],
                action:function(i) {
                    if( i == 0) {
                        artyom.say(answerSuccessful);
                        speakVowelU.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 1) {
                        artyom.say(answerSuccessful);
                        speakVowelU.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 2) {
                        artyom.say(answerSuccessful);
                        speakVowelU.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                    if( i == 3) {
                        artyom.say(answerSuccessful);
                        speakVowelU.classList.toggle('backgroundActive'); 
                        artyom.dontObey();
                    }
                }
            } 
        ])
    }, false);




