document.addEventListener("DOMContentLoaded", function() {
    let banners = document.querySelectorAll(".banner");
    let currentBanner = 0;

    banners[currentBanner].classList.add("visible");

    setInterval(() => {
        banners[currentBanner].classList.remove("visible");
        currentBanner = (currentBanner + 1) % banners.length;
        banners[currentBanner].classList.add("visible");
    }, 5000); // Alterna a cada 5 segundos
});

document.addEventListener("DOMContentLoaded", function() {

    const slides = document.querySelectorAll('.carousel > div');
    const nextButton = document.getElementById('depois');
    const prevButton = document.getElementById('antes');
    let currentSlide = 0;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('slide-active');
            } else {
                slide.classList.remove('slide-active');
            }
        });
    };

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });

    updateSlides(); // Inicialize o primeiro slide
});
