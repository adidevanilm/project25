
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,paper;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(600,570,1200,20);
	dustbinObj=new dustbin(1000,550);
	paper=new Paper(80, 450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine)
 groundObject.display();
 dustbinObj.display();
 paper.display();
 drawSprites()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:190, y:-195});
}



}

