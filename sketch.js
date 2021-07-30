var seaImg,sea;
var shipImg1,ship;
function preload(){
seaImg=loadImage('sea.png');
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");



}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,50,70);
  sea.addAnimation('sea.png');
  sea.scale=0.5;
ship=createSprite(130,200,30,30);
  ship.addAnimation(shipImg1);
}

function draw() {
  background(30);
 drawSprite();
}
