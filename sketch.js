var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  
  bowImage = loadImage("bow0.png");
  
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage ("green_balloon0.png");
  blue_balloonImage = loadImage ("blue_balloon0.png");
  pink_balloonImage = loadImage ("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }  
  //moving bow
    bow.y = World.mouseY

    if (bow.y < 43 || bow.y > 357) {
      if (bow.y < 43) {
        bow.y = 43;
      } else if (bow.y > 357) {
        bow.y = 357;
      }
    }
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));

  if (World.frameCount % 100 == 0) {
    console.log (select_balloon);

    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      blueBalloon ();
    } else if (select_balloon == 3) {
      greenBalloon ();
    } else {
      pinkBalloon ();
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(75, 325)), 10, 10);
  red.addImage(red_balloonImage);
  
  red.scale = 0.1;
  red.velocityX = 4;
  red.lifetime = 150;
}

function blueBalloon() {
  var blue = createSprite (Math.round (random (75, 300), 0));
  blue.addImage (blue_balloonImage);
 
  blue.scale = 0.14;
  blue.velocityY = 4;
  blue.lifetime = 150;
}

function greenBalloon() {
  var green = createSprite (0, Math.round (random (75, 325)));
  green.addImage (green_balloonImage);

  green.scale = 0.12;
  green.velocityX = 4;
  green.lifetime = 150;
}

function pinkBalloon() {
  var pink = createSprite (Math.round (random (75, 300)), 0);
  pink.addImage (pink_balloonImage);

  pink.scale = 1.5;
  pink.velocityY = 4
  pink.lietime = 150;
}