$(document).ready(function () {
    $('.quotes-slides').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 16500,
        pauseOnFocus: true,
        oauseOnHover: true,
        pauseOnDotsHover: true
    });
    if ($(window).width() <= '900') {
        $('.team-cards').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2500,
            pauseOnFocus: true,
            oauseOnHover: true,
            pauseOnDotsHover: true
        });
    }
})

let burgerButton = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.menu');
let body = document.querySelector('body');

burgerButton.addEventListener("click", function () {
    burgerMenu.classList.toggle('active');
    burgerButton.classList.toggle('active');
    body.classList.toggle('block');
    burgerButton.style.backgroundColor = "#fff";
})