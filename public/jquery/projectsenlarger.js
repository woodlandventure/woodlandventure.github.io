// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName("panel-image");
var modalImg = document.getElementById("modal-image");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    console.log("clicked");
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//For images that take you to another page
// Get the modal
var modalClickable = document.getElementById('myModalClickable');

var imagesClickable = document.getElementsByClassName("panel-image-clickable");
var modalImgClickable = document.getElementById("modal-image-clickable");

for (var i = 0; i < imagesClickable.length; i++) {
  imagesClickable[i].onclick = function(){
    console.log("clicked");
    modalClickable.style.display = "block";
    modalImgClickable.src = this.src;

    var imageId = this.getAttribute("id");
    var clickablehref = document.getElementById("clickablehref");
    clickablehref.setAttribute("href", "/project/" + imageId + '.html');
  }
}

// Get the <span> element that closes the modal
var spanClickable = document.getElementById("closeClickable");

// When the user clicks on <span> (x), close the modal
spanClickable.onclick = function() { 
  modalClickable.style.display = "none";
}