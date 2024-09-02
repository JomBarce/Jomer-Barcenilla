function goToPage(url) {
    window.location = url;
}

function goToSite(url) {
  window.open(url, "_blank");
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  x[slideIndex-1].setAttribute("style", "display:block;");  
}