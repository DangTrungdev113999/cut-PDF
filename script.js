//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

  var scrollStep = -window.scrollY / (1000 / 15),
  scrollInterval = setInterval(function(){
  if ( window.scrollY != 0 ) {
      window.scrollBy( 0, scrollStep );
  }
  else clearInterval(scrollInterval); 
},15);
}
