// Vowel listen
let letter_a = document.getElementById("btn-lisen-vowel-a");
let letter_e = document.getElementById("btn-lisen-vowel-e");
let letter_i = document.getElementById("btn-lisen-vowel-i");
let letter_o = document.getElementById("btn-lisen-vowel-o");
let letter_u = document.getElementById("btn-lisen-vowel-u");

letter_a.addEventListener("click", function() {
    
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("a");
    let img_lletter_a = document.querySelector("#btn-lisen-vowel-a img");
    let src = img_lletter_a.getAttribute("src");
    if (src == '/src/img/vowel/a_uppercase_512px.png') {
        img_lletter_a.setAttribute('src', '/src/img/vowel/a_lowercase_512px.png');
        letter_a.classList.toggle('backgroundActive'); 
    } else {
        img_lletter_a.setAttribute('src', '/src/img/vowel/a_uppercase_512px.png');
        letter_a.classList.toggle('backgroundActive');  
    } 
}, false);

letter_e.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("e");
    let img_lletter_e = document.querySelector("#btn-lisen-vowel-e img");
    let src = img_lletter_e.getAttribute("src");
    if (src == '/src/img/vowel/e_uppercase_512px.png') {
        img_lletter_e.setAttribute('src', '/src/img/vowel/e_lowercase_512px.png');
        letter_e.classList.toggle('backgroundActive'); 
    } else {
        img_lletter_e.setAttribute('src', '/src/img/vowel/e_uppercase_512px.png');
        letter_e.classList.toggle('backgroundActive'); 
    } 
}, false)

letter_i.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("i");
    let img_lletter_i = document.querySelector("#btn-lisen-vowel-i img");
    let src = img_lletter_i.getAttribute("src");
    if (src == '/src/img/vowel/i_uppercase_512px.png') {
        img_lletter_i.setAttribute('src', '/src/img/vowel/i_lowercase_512px.png');
        letter_i.classList.toggle('backgroundActive'); 
    } else {
        img_lletter_i.setAttribute('src', '/src/img/vowel/i_uppercase_512px.png');
        letter_i.classList.toggle('backgroundActive'); 
    } 
}, false);

letter_o.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("o");
    let img_lletter_o = document.querySelector("#btn-lisen-vowel-o img");
    let src = img_lletter_o.getAttribute("src");
    if (src == '/src/img/vowel/o_uppercase_512px.png') {
        img_lletter_o.setAttribute('src', '/src/img/vowel/o_lowercase_512px.png');
        letter_o.classList.toggle('backgroundActive'); 
    } else {
        img_lletter_o.setAttribute('src', '/src/img/vowel/o_uppercase_512px.png');
        letter_o.classList.toggle('backgroundActive'); 
    } 
}, false)

letter_u.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("u");
    let img_lletter_u = document.querySelector("#btn-lisen-vowel-u img");
    let src = img_lletter_u.getAttribute("src");
    if (src == '/src/img/vowel/u_uppercase_512px.png') {
        img_lletter_u.setAttribute('src', '/src/img/vowel/u_lowercase_512px.png');
        letter_u.classList.toggle('backgroundActive'); 
    } else {
        img_lletter_u.setAttribute('src', '/src/img/vowel/u_uppercase_512px.png');
        letter_u.classList.toggle('backgroundActive'); 
    } 
}, false);



