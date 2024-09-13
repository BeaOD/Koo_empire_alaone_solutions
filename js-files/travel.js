let allImages = document.querySelectorAll('.carouselImages img'); 
let wholeCarousel = allImages.length;
let forwardButton = document.getElementsByClassName('carouselB1')[0];
let backwardButton = document.getElementsByClassName('carouselB2')[0];
let index = 0;

function updateCarousel() {
    const offset = -index * 100; 
    document.querySelector('.carouselImages').style.transform = `translateX(${offset}%)`;
}

forwardButton.addEventListener('click', function() {
    index = (index + 1) % wholeCarousel;
    updateCarousel();
});

backwardButton.addEventListener('click', function() {
    index = (index - 1 + wholeCarousel) % wholeCarousel;
    updateCarousel();
});