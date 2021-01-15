const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin,paper,ground;	


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
	ground=new Ground(800,670,1600,20);

	dustbin=new Dustbin(1100,425);

    Engine.run(engine);
}
function draw() {
  background(80,80,80);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-350})
	}
}