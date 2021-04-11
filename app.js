
//scroll magic
'use strict';


//mostras desple
let portafolios = document.querySelectorAll(".portafolios");

function mostrarScroll() {
 let scrollTop = document.documentElement.scrollTop;
 for (let i = 0; i < portafolios.length; i++) {
 let alturaPortafolios = portafolios[i].offsetTop;
   if(alturaPortafolios - 400 < scrollTop) {
portafolios[i].style.opacity = 1;
portafolios[i].classList.add("mostrarArriba")
}

}
}


window.addEventListener('scroll', mostrarScroll);


