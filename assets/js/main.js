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
