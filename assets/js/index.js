document.addEventListener("DOMContentLoaded", function () {
    // Contoh manipulasi DOM di sini
});
// scripts/script.js

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider img');
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
    const slides = document.querySelectorAll('.slider img');
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Menampilkan slide pertama saat halaman dimuat
showSlides();
