// Get the modal
var pModal = document.getElementById("modalOverlay");

// Get the images and insert them inside the modal
var aImages = document.getElementsByClassName("galleryPic");

for (var iImg = 0; iImg < aImages.length; iImg++) {
  var pPicture = aImages[iImg];
  var pModalPic = document.getElementById("modalPic");
  var pCaption = document.getElementById("modalCaption");

  pPicture.onclick = function(){
    pModal.style.display = "block";
    pModalPic.src = this.src;
    pCaption.innerHTML = this.alt;
  }
}

// Close the modal
pModal.onclick = function() { 
  pModal.style.display = "none";
}