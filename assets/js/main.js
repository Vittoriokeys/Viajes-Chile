const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Mensaje de Bienvenida a la WEB
window.alert("Bienvenidos y bienvenidas a Viajes Chile");

//Cambia de color el Navbar al hacer scroll
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.transparent').addClass("navscroll");
        } else {
            $(".transparent").removeClass("navscroll");
        }
    });
});

// Función para el smooth scroll ajustado a 200 ms
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 200);
        }
    });
});

//Función para el tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})