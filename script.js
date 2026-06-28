const images = document.querySelectorAll(".slide img, .gallery-grid img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

function openImage(src){

    currentIndex = [...images].findIndex(img => img.src === src);

    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

function closeImage(){
    lightbox.style.display = "none";
}

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

document.addEventListener("keydown",function(e){

    if(lightbox.style.display==="flex"){

        if(e.key==="ArrowRight"){
            nextImage();
        }

        if(e.key==="ArrowLeft"){
            prevImage();
        }

        if(e.key==="Escape"){
            closeImage();
        }

    }

});
