
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Hammer;
var Ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   Hammer= new hammer(200,200,50,20);
   Ground= new ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Hammer.display();
    Ground.display();
  follow();
 
  drawSprites();

}
function follow(){
	
Matter.Body.setPosition(Hammer.body,{x:mouseX,y:mouseY});
}


