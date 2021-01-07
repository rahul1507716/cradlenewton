
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.

	bob1 = new bob(280,325);
	bob2 = new bob(340,325);
	bob3 = new bob(400,325);
	bob4 = new bob(460,325);
	bob5 = new bob(520,325);
	roof1 = new roof(400,100,600,50);
	rope1 = new rope(bob1.body,roof1.body,-120,0);
	rope2 = new rope(bob2.body,roof1.body,-60,0);
	rope3 = new rope(bob3.body,roof1.body,0,0);
	rope4 = new rope(bob4.body,roof1.body,60,0);
	rope5 = new rope(bob5.body,roof1.body,120,0);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof1.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}


