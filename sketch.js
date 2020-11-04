var ball,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
    Engine.run(engine);
  
	ball=new Paper();
	ground1=new Ground();
	
    dustbinPosition=width/2;
	dustbinY=670;
	dustbinLeftSprite=createSprite(dustbinPosition+126,dustbinY-60,20,100);
	dustbinLeftSprite.shapeColor="green";
	
	dustbinBottomSprite=createSprite(dustbinPosition+226,dustbinY,200,20);
    dustbinBottomSprite.shapeColor="green";

	dustbinRightSprite=createSprite(dustbinPosition+336,dustbinY-60,20,100);
	dustbinRightSprite.shapeColor="green";

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  drawSprites();
  ground1.display();
}

function keyPressed () {
if(keyCode===UP_ARROW) {
Matter.Body.applyForce(ball.body,ball.body.position,{x:231,y:-231});
}
}

