var slideIndex =1;
showslides (slideIndex)

function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dot = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }   

    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
        
    }
    
}
