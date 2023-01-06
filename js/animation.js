"use strict"
const type = new Typed(".typed", {
    stringsElement: "#cadena", //El Id
    typeSpeed: 50, //La velocidad 
    startDelay: 0, //Tiempo de demora
    backSpeed: 50, //Tiempo para eliminar cada letra
    smartBackSpeed: false, //Elimina las palabras que se cambiarán
    backDelay: 3000, //Lo que tardará en realizar de nuevo la animación
    loop: true, //si queremos que repita
    loopCount: false, //cuantas veces queremos que repita
    showCursor: false, //si queremos que muestre el cursor.
    cursorChar: '|',
})

const ul = document.querySelector(".displacement > ul");
const li = document.querySelectorAll(".displacement > ul li");

function frames(){
    const animacion = ul.animate([
        {transform: "translateY(0rem)"},
        {transform: "translateY(-7rem)"}
    ],{
        easing: "linear",
        duration: 200,
        iterations: 1
    })
    return animacion.finished; 
}

function overlay(){
    frames()
    .then((res)=>{
        ul.appendChild(document.querySelectorAll(".displacement > ul li")[0])
    });
}

setInterval(() => {
    overlay();
}, 3000)