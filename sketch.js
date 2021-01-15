
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{

}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,800,1600,40)
	tree = new Tree();
	mango1 = new Mango(1410,402,50,50);
	mango2 = new Mango(1430,411,50,50)
	mango3 = new Mango(1450,402,50,50);
	stone = new Stone(140,500,20);
	slingshot = new SlingShot(stone.body,{x : 140, y : 500});
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	detectCollision(stone,mango1)
	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	stone.display();
	slingshot.display();
	drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY})
}

function mouseReleased(){
	slingshot.release();
	
}

function keyPressed(){
	if(keyCode === 32){
		Matter.body.setPosition(stone.body, {x : 140,y : 500})
		slingshot.attach(stone.body);
	}
}

function detectCollision(bodyA,bodyB){
var distance = dist(bodyA.body.position.x,bodyA.body.position.y,bodyB.body.position.x,bodyB.body.position.y);
if(distance>=750){
	Matter.Body.setStatic(bodyB.body,false);
}
}