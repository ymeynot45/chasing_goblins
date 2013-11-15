$(document).ready(function() {

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var bgReady = false;
  var bgImage = new Image();

  canvas.width = 512;
  canvas.height = 480;
  document.body.appendChild(canvas);

  bgImage.onload = function () {
    bgReady = true;
  };
  bgImage.src = "images/background.png";


});
