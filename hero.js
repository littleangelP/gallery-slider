/* ===================================
   HERO BACKGROUND AUTO SLIDER
=================================== */

const slides = document.querySelectorAll(".hero-slider img");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

/* Every 4 Seconds */

setInterval(changeSlide,4000);
