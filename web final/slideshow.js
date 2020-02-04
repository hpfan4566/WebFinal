var image = document.getElementById("image");
 
var imageArray = ["images/elonQuote1.jpg","images/elon1.png","images/elonQuote2.jpg","images/Elon2.png","elonQuote3.jpg","images/elon3.png"];
 
var imageIndex = 0;
 
function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
 
   setInterval(changeImage,4000);
 
}