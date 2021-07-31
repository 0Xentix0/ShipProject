var seaImg;
var ship,ship_sailng;
function preload(){
  seaImg=loadImage("sea.png");
  ship_sailng=loadAnimation("ship-1.png", "ship-2.png",);
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,200,400,400);
 ship=createSprite(200,200,100,100);
  sea=addImgage(seaImg);
   ship=addAnimation("sailing", ship_sailing);
}

function draw() {
   background("blue");
 ship.scale=0.5;
if(sea.x<0){
sea.x=sea.width/2;
}
drawSprites();
}