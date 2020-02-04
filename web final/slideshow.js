var image = document.getElementById("image");
 
var imageArray = ["images/space1.png","images/elonQuote1.jpg","images/space2.png","images/elon1.png","images/elonQuote2.jpg","images/Elon2.png","images/space3.png","elonQuote3.jpg","images/elon3.png","images/space4.png"];
 
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