var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}

var reviewIndex = 0;
showReviews();

function showReviews() {
  var i;
  var slides = document.getElementsByClassName("reviews");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  reviewIndex++;
  if (reviewIndex > slides.length) {
    reviewIndex = 1;
  }
  slides[reviewIndex - 1].style.display = "block";
  setTimeout(showReviews, 7000); // Change image every 7 seconds
}

window.onscroll = function () {
  myFunction();
  phoneFunction();
};

// Get the navbar
var navbar = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

var mobile_nav = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function phoneFunction() {
  if (window.pageYOffset >= sticky) {
    mobile_nav.classList.add("mobile_sticky");
  } else {
    mobile_nav.classList.remove("mobile_sticky");
  }
}
