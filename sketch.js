var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 500, 80, 80);
  fixedRect.shapeColor = "green";
  movingRect=createSprite(400,200,80,50)
  movingRect.shapeColor= "green";

  gameBox1 = createSprite(100, 100, 50, 50);
  gameBox1.shapeColor = "green";
  gameBox2 = createSprite(200, 100, 50, 50);
  gameBox2.shapeColor = "green";
  gameBox3 = createSprite(300, 100, 50, 50);
  gameBox3.shapeColor = "green";
  gameBox4 = createSprite(400, 100, 50, 50);
  gameBox4.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x= mouseX;
  movingRect.y= mouseY

 if( isTouching(gameBox4, movingRect) ){
  gameBox4.shapeColor = "blue";
  movingRect.shapeColor= "blue";
 }
 else{
  movingRect.shapeColor= "green";
  gameBox4.shapeColor = "green";
 }


 
  drawSprites();
}

