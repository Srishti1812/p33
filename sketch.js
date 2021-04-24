var backgroundImg;
var boy;
var sprite1;

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  sprite1 = loadAnimation("Sprite1.png","Sprite2.png");

}
function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 250, 50, 50);


  
  
}

function draw() {
  background(backgroundImg);  
  boy.addAnimation("Sprite1.png", "Sprite2.png", sprite1);
  drawSprites();
}