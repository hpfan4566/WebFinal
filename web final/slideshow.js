var image = document.getElementById("image");
 
var imageArray = ["images/elon1.png","images/Elon2.png","images/elon3.png"];
 
var imageIndex = 0;
 
function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}
 
window.onload = function() {
 
   setInterval(changeImage,2000);
 
}