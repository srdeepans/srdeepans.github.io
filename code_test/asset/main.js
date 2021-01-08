var nav = document.getElementById('navlist');

function toggleNav() {
    if (nav.style.display === "")
        nav.style.display = "block";
    else
        nav.style.display = "";
}

function windowResizeHandler() {
    if (screen.width > 500)
        nav.style.display = "";
}
window.addEventListener("resize", windowResizeHandler);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1 + 1].style.cssText = "opacity:0.5; display:block;";
    dots[slideIndex - 1 + 1].className += " ";

    slides[slideIndex - 1].style.cssText = "opacity:1;color:#fff; display:block;";
    dots[slideIndex - 1].className += " active";

    slides[slideIndex - 1 - 1].style.cssText = "opacity:0.5; display:block;";
    dots[slideIndex - 1 - 1].className += " ";
}