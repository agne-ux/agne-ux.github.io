// Slideshow
var slideIndices = {
	left: 1,
	right: 1
}

showDivs(slideIndices.left, 'left');
showDivs(slideIndices.right, 'right');

function plusDivs(n, extraClass) {
  showDivs(slideIndices[extraClass] += n, extraClass);
}

function showDivs(n, extraClass) {
  var i;
  var x = document.getElementsByClassName("mySlides " + extraClass);
  if (n > x.length) {slideIndices[extraClass] = 1}
  if (n < 1) {slideIndices[extraClass] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndices[extraClass]-1].style.display = "block";  
}


