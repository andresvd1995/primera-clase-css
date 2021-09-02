var slideIndex =1;
showslides (slideIndex)

function plusSlides(n) {
    showslides(slideIndex += n);
 }

 function currentSlide(n){
    showslides(slideIndex = n);

 }

function showslides(n) {
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }   

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
        
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className.replace(" active", "");
        
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
    
    slideIndex++;

    setTimeout(() => {
        showslides(slideIndex);
    }, 6000);
}
