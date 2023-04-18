// CAROUSEL MENU COM AS SETAS
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// AUTOMÁTICO DO CAROUSEL MENU
   var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

//SCROLL ANIMATION(SCROLLREVEAL)
 window.sr = ScrollReveal({reset: true});

  sr.reveal('.title-menu', {
  translate:{y:50},
   duration: 1000});

 sr.reveal('.menu-home', {duration: 2000});
 sr.reveal('.bar', {duration: 2000});
 sr.reveal('.promo-container', {duration: 2000});
 sr.reveal('.box', {duration: 2000});
