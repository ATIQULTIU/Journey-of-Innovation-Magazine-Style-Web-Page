// Simple animation when scrolling

const images = document.querySelectorAll("img");

window.addEventListener("scroll", () => {

images.forEach(img => {

const position = img.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){
img.style.transform = "scale(1)";
img.style.opacity = "1";
}

});

});