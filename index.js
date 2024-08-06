// javascript

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    // Get current URL hash or pathname
    const currentHash = window.location.hash || '#home'; // Default to '#home'
    const currentId = currentHash.substring(1); // Extract id from hash

    // Find the link with the id that matches the current page
    const currentLink = document.querySelector(`.navbar a[id="${currentId}"]`);
    if (currentLink) {
        currentLink.classList.add('current-page');
    }
});