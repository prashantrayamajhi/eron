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
