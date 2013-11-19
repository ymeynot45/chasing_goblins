$(document).ready(function() {

  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var bgReady = false;
  var bgImage = new Image();
  var keysDown = {};
  var goblinsCaught = 0;
  var hero = {
    speed: 256,
    X: 0,
    y: 0
  };
  var goblin = {
    speed: 128,
    x: 0,
    y: 0
  };

  var reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    goblin.x = 32 + (Math.random() * (canvas.width - 64));
    goblin.y = 32 + (Math.random() * (canvas.height - 64));
  };
  
  var update = function (timeModifier) {
    if (38 in keysDown) {
      hero.y -= hero.speed * timeModifier;
    }
    if (40 in keysDown) {
      hero.y += hero.speed * timeModifier;
    }
    if (37 in keysDown) {
      hero.x -= hero.speed * timeModifier;
    }
    if (39 in keysDown) {
      hero.x += hero.speed * timeModifier;
    }

    if (
      hero.x <= (goblin.x + 32)
      && goblin.x <= (hero.x + 32)
      && hero.y <= (goblin.y + 32)
      && goblin.y <= (hero.y + 32)
    ) 
    {
      ++goblinsCaught;
      reset();
    }
  };

  canvas.width = 512;
  canvas.height = 480;
  document.body.appendChild(canvas);

  bgImage.onload = function () {
    bgReady = true;
  };
  bgImage.src = "/images/background.png";

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);

});
