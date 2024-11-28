// Слайдер смены фона
const backgroundImages = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

setInterval(() => {
    backgroundImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImages[currentImageIndex].classList.add('active');
}, 5000);
