// Alphabet listen
let letter_alphabet_a = document.getElementById("btn-lisen-alphabet-a");
let letter_alphabet_b = document.getElementById("btn-lisen-alphabet-b");
let letter_alphabet_c = document.getElementById("btn-lisen-alphabet-c");
let letter_alphabet_d = document.getElementById("btn-lisen-alphabet-d");
let letter_alphabet_e = document.getElementById("btn-lisen-alphabet-e");
let letter_alphabet_f = document.getElementById("btn-lisen-alphabet-f");
let letter_alphabet_g = document.getElementById("btn-lisen-alphabet-g");
let letter_alphabet_h = document.getElementById("btn-lisen-alphabet-h");
let letter_alphabet_i = document.getElementById("btn-lisen-alphabet-i");
let letter_alphabet_j = document.getElementById("btn-lisen-alphabet-j");
let letter_alphabet_k = document.getElementById("btn-lisen-alphabet-k");
let letter_alphabet_l = document.getElementById("btn-lisen-alphabet-l");
let letter_alphabet_m = document.getElementById("btn-lisen-alphabet-m");
let letter_alphabet_n = document.getElementById("btn-lisen-alphabet-n");
let letter_alphabet_o = document.getElementById("btn-lisen-alphabet-o");
let letter_alphabet_p = document.getElementById("btn-lisen-alphabet-p");
let letter_alphabet_q = document.getElementById("btn-lisen-alphabet-q");
let letter_alphabet_r = document.getElementById("btn-lisen-alphabet-r");
let letter_alphabet_s = document.getElementById("btn-lisen-alphabet-s");
let letter_alphabet_t = document.getElementById("btn-lisen-alphabet-t");
let letter_alphabet_u = document.getElementById("btn-lisen-alphabet-u");
let letter_alphabet_v = document.getElementById("btn-lisen-alphabet-v");
let letter_alphabet_w = document.getElementById("btn-lisen-alphabet-w");
let letter_alphabet_x = document.getElementById("btn-lisen-alphabet-x");
let letter_alphabet_y = document.getElementById("btn-lisen-alphabet-y");
let letter_alphabet_z = document.getElementById("btn-lisen-alphabet-z");

letter_alphabet_a.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("a");
    let img_letter_a = document.querySelector("#btn-lisen-alphabet-a img");
    let src = img_letter_a.getAttribute("src");
    if (src == '/src/img/alphabet/a_uppercase_512px.png') {
        img_letter_a.setAttribute('src', '/src/img/alphabet/a_lowercase_512px.png');
        letter_alphabet_a.classList.toggle('backgroundActive'); 
    } else {
        img_letter_a.setAttribute('src', '/src/img/alphabet/a_uppercase_512px.png');
        letter_alphabet_a.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_b.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("b");
    let img_letter_b = document.querySelector("#btn-lisen-alphabet-b img");
    let src = img_letter_b.getAttribute("src");
    if (src == '/src/img/alphabet/b_uppercase_512px.png') {
        img_letter_b.setAttribute('src', '/src/img/alphabet/b_lowercase_512px.png');
        letter_alphabet_b.classList.toggle('backgroundActive'); 
    } else {
        img_letter_b.setAttribute('src', '/src/img/alphabet/b_uppercase_512px.png');
        letter_alphabet_b.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_c.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("c");
    let img_letter_c = document.querySelector("#btn-lisen-alphabet-c img");
    let src = img_letter_c.getAttribute("src");
    if (src == '/src/img/alphabet/c_uppercase_512px.png') {
        img_letter_c.setAttribute('src', '/src/img/alphabet/c_lowercase_512px.png');
        letter_alphabet_c.classList.toggle('backgroundActive'); 
    } else {
        img_letter_c.setAttribute('src', '/src/img/alphabet/c_uppercase_512px.png');
        letter_alphabet_c.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_d.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("d");
    let img_letter_d = document.querySelector("#btn-lisen-alphabet-d img");
    let src = img_letter_d.getAttribute("src");
    if (src == '/src/img/alphabet/d_uppercase_512px.png') {
        img_letter_d.setAttribute('src', '/src/img/alphabet/d_lowercase_512px.png');
        letter_alphabet_d.classList.toggle('backgroundActive'); 
    } else {
        img_letter_d.setAttribute('src', '/src/img/alphabet/d_uppercase_512px.png');
        letter_alphabet_d.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_e.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("e");
    let img_letter_e = document.querySelector("#btn-lisen-alphabet-e img");
    let src = img_letter_e.getAttribute("src");
    if (src == '/src/img/alphabet/e_uppercase_512px.png') {
        img_letter_e.setAttribute('src', '/src/img/alphabet/e_lowercase_512px.png');
        letter_alphabet_e.classList.toggle('backgroundActive'); 
    } else {
        img_letter_e.setAttribute('src', '/src/img/alphabet/e_uppercase_512px.png');
        letter_alphabet_e.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_f.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("f");
    let img_letter_f = document.querySelector("#btn-lisen-alphabet-f img");
    let src = img_letter_f.getAttribute("src");
    if (src == '/src/img/alphabet/f_uppercase_512px.png') {
        img_letter_f.setAttribute('src', '/src/img/alphabet/f_lowercase_512px.png');
        letter_alphabet_f.classList.toggle('backgroundActive'); 
    } else {
        img_letter_f.setAttribute('src', '/src/img/alphabet/f_uppercase_512px.png');
        letter_alphabet_f.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_g.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("g");
    let img_letter_g = document.querySelector("#btn-lisen-alphabet-g img");
    let src = img_letter_g.getAttribute("src");
    if (src == '/src/img/alphabet/g_uppercase_512px.png') {
        img_letter_g.setAttribute('src', '/src/img/alphabet/g_lowercase_512px.png');
        letter_alphabet_g.classList.toggle('backgroundActive'); 
    } else {
        img_letter_g.setAttribute('src', '/src/img/alphabet/g_uppercase_512px.png');
        letter_alphabet_g.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_h.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("h");
    let img_letter_h = document.querySelector("#btn-lisen-alphabet-h img");
    let src = img_letter_h.getAttribute("src");
    if (src == '/src/img/alphabet/h_uppercase_512px.png') {
        img_letter_h.setAttribute('src', '/src/img/alphabet/h_lowercase_512px.png');
        letter_alphabet_h.classList.toggle('backgroundActive'); 
    } else {
        img_letter_h.setAttribute('src', '/src/img/alphabet/h_uppercase_512px.png');
        letter_alphabet_h.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_i.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("i");
    let img_letter_i = document.querySelector("#btn-lisen-alphabet-i img");
    let src = img_letter_i.getAttribute("src");
    if (src == '/src/img/alphabet/i_uppercase_512px.png') {
        img_letter_i.setAttribute('src', '/src/img/alphabet/i_lowercase_512px.png');
        letter_alphabet_i.classList.toggle('backgroundActive'); 
    } else {
        img_letter_i.setAttribute('src', '/src/img/alphabet/i_uppercase_512px.png');
        letter_alphabet_i.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_j.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("j");
    let img_letter_j = document.querySelector("#btn-lisen-alphabet-j img");
    let src = img_letter_j.getAttribute("src");
    if (src == '/src/img/alphabet/j_uppercase_512px.png') {
        img_letter_j.setAttribute('src', '/src/img/alphabet/j_lowercase_512px.png');
        letter_alphabet_j.classList.toggle('backgroundActive'); 
    } else {
        img_letter_j.setAttribute('src', '/src/img/alphabet/j_uppercase_512px.png');
        letter_alphabet_j.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_k.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("k");
    let img_letter_k = document.querySelector("#btn-lisen-alphabet-k img");
    let src = img_letter_k.getAttribute("src");
    if (src == '/src/img/alphabet/k_uppercase_512px.png') {
        img_letter_k.setAttribute('src', '/src/img/alphabet/k_lowercase_512px.png');
        letter_alphabet_k.classList.toggle('backgroundActive'); 
    } else {
        img_letter_k.setAttribute('src', '/src/img/alphabet/k_uppercase_512px.png');
        letter_alphabet_k.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_l.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("l");
    let img_letter_l = document.querySelector("#btn-lisen-alphabet-l img");
    let src = img_letter_l.getAttribute("src");
    if (src == '/src/img/alphabet/l_uppercase_512px.png') {
        img_letter_l.setAttribute('src', '/src/img/alphabet/l_lowercase_512px.png');
        letter_alphabet_l.classList.toggle('backgroundActive'); 
    } else {
        img_letter_l.setAttribute('src', '/src/img/alphabet/l_uppercase_512px.png');
        letter_alphabet_l.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_m.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("m");
    let img_letter_m = document.querySelector("#btn-lisen-alphabet-m img");
    let src = img_letter_m.getAttribute("src");
    if (src == '/src/img/alphabet/m_uppercase_512px.png') {
        img_letter_m.setAttribute('src', '/src/img/alphabet/m_lowercase_512px.png');
        letter_alphabet_m.classList.toggle('backgroundActive'); 
    } else {
        img_letter_m.setAttribute('src', '/src/img/alphabet/m_uppercase_512px.png');
        letter_alphabet_m.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_n.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("n");
    let img_letter_n = document.querySelector("#btn-lisen-alphabet-n img");
    let src = img_letter_n.getAttribute("src");
    if (src == '/src/img/alphabet/n_uppercase_512px.png') {
        img_letter_n.setAttribute('src', '/src/img/alphabet/n_lowercase_512px.png');
        letter_alphabet_n.classList.toggle('backgroundActive'); 
    } else {
        img_letter_n.setAttribute('src', '/src/img/alphabet/n_uppercase_512px.png');
        letter_alphabet_n.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_o.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("o");
    let img_letter_o = document.querySelector("#btn-lisen-alphabet-o img");
    let src = img_letter_o.getAttribute("src");
    if (src == '/src/img/alphabet/o_uppercase_512px.png') {
        img_letter_o.setAttribute('src', '/src/img/alphabet/o_lowercase_512px.png');
        letter_alphabet_o.classList.toggle('backgroundActive'); 
    } else {
        img_letter_o.setAttribute('src', '/src/img/alphabet/o_uppercase_512px.png');
        letter_alphabet_o.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_p.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("p");
    let img_letter_p = document.querySelector("#btn-lisen-alphabet-p img");
    let src = img_letter_p.getAttribute("src");
    if (src == '/src/img/alphabet/p_uppercase_512px.png') {
        img_letter_p.setAttribute('src', '/src/img/alphabet/p_lowercase_512px.png');
        letter_alphabet_p.classList.toggle('backgroundActive'); 
    } else {
        img_letter_p.setAttribute('src', '/src/img/alphabet/p_uppercase_512px.png');
        letter_alphabet_p.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_q.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("q");
    let img_letter_q = document.querySelector("#btn-lisen-alphabet-q img");
    let src = img_letter_q.getAttribute("src");
    if (src == '/src/img/alphabet/q_uppercase_512px.png') {
        img_letter_q.setAttribute('src', '/src/img/alphabet/q_lowercase_512px.png');
        letter_alphabet_q.classList.toggle('backgroundActive'); 
    } else {
        img_letter_q.setAttribute('src', '/src/img/alphabet/q_uppercase_512px.png');
        letter_alphabet_q.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_r.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("r");
    let img_letter_r = document.querySelector("#btn-lisen-alphabet-r img");
    let src = img_letter_r.getAttribute("src");
    if (src == '/src/img/alphabet/r_uppercase_512px.png') {
        img_letter_r.setAttribute('src', '/src/img/alphabet/r_lowercase_512px.png');
        letter_alphabet_r.classList.toggle('backgroundActive'); 
    } else {
        img_letter_r.setAttribute('src', '/src/img/alphabet/r_uppercase_512px.png');
        letter_alphabet_r.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_s.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("s");
    let img_letter_s = document.querySelector("#btn-lisen-alphabet-s img");
    let src = img_letter_s.getAttribute("src");
    if (src == '/src/img/alphabet/s_uppercase_512px.png') {
        img_letter_s.setAttribute('src', '/src/img/alphabet/s_lowercase_512px.png');
        letter_alphabet_s.classList.toggle('backgroundActive'); 
    } else {
        img_letter_s.setAttribute('src', '/src/img/alphabet/s_uppercase_512px.png');
        letter_alphabet_s.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_t.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("t");
    let img_letter_t = document.querySelector("#btn-lisen-alphabet-t img");
    let src = img_letter_t.getAttribute("src");
    if (src == '/src/img/alphabet/t_uppercase_512px.png') {
        img_letter_t.setAttribute('src', '/src/img/alphabet/t_lowercase_512px.png');
        letter_alphabet_t.classList.toggle('backgroundActive'); 
    } else {
        img_letter_t.setAttribute('src', '/src/img/alphabet/t_uppercase_512px.png');
        letter_alphabet_t.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_u.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("u");
    let img_letter_u = document.querySelector("#btn-lisen-alphabet-u img");
    let src = img_letter_u.getAttribute("src");
    if (src == '/src/img/alphabet/u_uppercase_512px.png') {
        img_letter_u.setAttribute('src', '/src/img/alphabet/u_lowercase_512px.png');
        letter_alphabet_u.classList.toggle('backgroundActive'); 
    } else {
        img_letter_u.setAttribute('src', '/src/img/alphabet/u_uppercase_512px.png');
        letter_alphabet_u.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_v.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("v");
    let img_letter_v = document.querySelector("#btn-lisen-alphabet-v img");
    let src = img_letter_v.getAttribute("src");
    if (src == '/src/img/alphabet/v_uppercase_512px.png') {
        img_letter_v.setAttribute('src', '/src/img/alphabet/v_lowercase_512px.png');
        letter_alphabet_v.classList.toggle('backgroundActive'); 
    } else {
        img_letter_v.setAttribute('src', '/src/img/alphabet/v_uppercase_512px.png');
        letter_alphabet_v.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_w.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("w");
    let img_letter_w = document.querySelector("#btn-lisen-alphabet-w img");
    let src = img_letter_w.getAttribute("src");
    if (src == '/src/img/alphabet/w_uppercase_512px.png') {
        img_letter_w.setAttribute('src', '/src/img/alphabet/w_lowercase_512px.png');
        letter_alphabet_w.classList.toggle('backgroundActive'); 
    } else {
        img_letter_w.setAttribute('src', '/src/img/alphabet/w_uppercase_512px.png');
        letter_alphabet_w.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_x.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("x");
    let img_letter_x = document.querySelector("#btn-lisen-alphabet-x img");
    let src = img_letter_x.getAttribute("src");
    if (src == '/src/img/alphabet/x_uppercase_512px.png') {
        img_letter_x.setAttribute('src', '/src/img/alphabet/x_lowercase_512px.png');
        letter_alphabet_x.classList.toggle('backgroundActive'); 
    } else {
        img_letter_x.setAttribute('src', '/src/img/alphabet/x_uppercase_512px.png');
        letter_alphabet_x.classList.toggle('backgroundActive'); 
    } 
}, false)
letter_alphabet_y.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("y griega");
    let img_letter_y = document.querySelector("#btn-lisen-alphabet-y img");
    let src = img_letter_y.getAttribute("src");
    if (src == '/src/img/alphabet/y_uppercase_512px.png') {
        img_letter_y.setAttribute('src', '/src/img/alphabet/y_lowercase_512px.png');
        letter_alphabet_y.classList.toggle('backgroundActive'); 
    } else {
        img_letter_y.setAttribute('src', '/src/img/alphabet/y_uppercase_512px.png');
        letter_alphabet_y.classList.toggle('backgroundActive'); 
    } 
}, false);
letter_alphabet_z.addEventListener("click", function() {
    let artyom = new Artyom();
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        debug:true,
        listen:true
    });
    artyom.say("z");
    let img_letter_z = document.querySelector("#btn-lisen-alphabet-z img");
    let src = img_letter_z.getAttribute("src");
    if (src == '/src/img/alphabet/z_uppercase_512px.png') {
        img_letter_z.setAttribute('src', '/src/img/alphabet/z_lowercase_512px.png');
        letter_alphabet_z.classList.toggle('backgroundActive'); 
    } else {
        img_letter_z.setAttribute('src', '/src/img/alphabet/z_uppercase_512px.png');
        letter_alphabet_z.classList.toggle('backgroundActive'); 
    } 
}, false);
