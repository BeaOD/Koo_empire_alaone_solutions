document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector('.image-container');
    const images = [
        './andy-images/bus.png',
        'image5.jpg',
        // Add more image URLs as needed
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${src}`;
        imageContainer.appendChild(img);
    });
});