/* ==========================================
   GALLERY SCRIPT - PART 1
========================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let images = [];
let currentIndex = 0;

function loadImages(){

    images = Array.from(
        document.querySelectorAll(".slide img, .gallery-grid img")
    );

}

window.onload = function(){

    loadImages();

}

function openImage(src){

    loadImages();

    currentIndex = images.findIndex(img => img.src === src);

    if(currentIndex < 0){

        currentIndex = 0;

    }

    lightbox.style.display = "flex";

    lightboxImg.src = src;

}

function closeImage(){

    lightbox.style.display = "none";

}
/* ==========================================
   NEXT / PREVIOUS FUNCTIONS
========================================== */

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    lightboxImg.src = images[currentIndex].src;

}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    lightboxImg.src = images[currentIndex].src;

}

/* ==========================================
   KEYBOARD SUPPORT
========================================== */

document.addEventListener("keydown", function(e){

    if(lightbox.style.display !== "flex") return;

    if(e.key === "ArrowRight"){

        nextImage();

    }

    if(e.key === "ArrowLeft"){

        prevImage();

    }

    if(e.key === "Escape"){

        closeImage();

    }

});
/* ==========================================
   MOBILE SWIPE + CLICK OUTSIDE
========================================== */

let startX = 0;
let endX = 0;

lightbox.addEventListener("touchstart", function(e){

    startX = e.changedTouches[0].clientX;

});

lightbox.addEventListener("touchend", function(e){

    endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        nextImage();

    }

    if(endX - startX > 50){

        prevImage();

    }

});

/* ==========================================
   CLICK OUTSIDE IMAGE TO CLOSE
========================================== */

lightbox.addEventListener("click", function(e){

    if(e.target === lightbox){

        closeImage();

    }

});

/* ==========================================
   PREVENT IMAGE CLICK FROM CLOSING
========================================== */

lightboxImg.addEventListener("click", function(e){

    e.stopPropagation();

});

/* ==========================================
   IMAGE PRELOAD
========================================== */

function preloadImages(){

    images.forEach(function(img){

        const image = new Image();

        image.src = img.src;

    });

}

window.addEventListener("load", function(){

    loadImages();

    preloadImages();

});
