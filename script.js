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

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('antes');
    const nextButton = document.getElementById('depois');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    // Mostrar o primeiro slide inicialmente
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona a imagem do menu e a lista
    const menuIcon = document.querySelector(".navigation-celular .menu");
    const navList = document.querySelector(".navigation-celular ul");

    // Adiciona um evento de clique na imagem do menu
    menuIcon.addEventListener("click", function() {
        // Alterna a classe 'show' no <ul>
        navList.classList.toggle("show");
    });
});