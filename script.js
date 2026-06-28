const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openImage(src){
    lightbox.style.display="flex";
    lightboxImg.src=src;
}

function closeImage(){
    lightbox.style.display="none";
}
