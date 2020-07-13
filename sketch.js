var ground
var log1, log2, log3
var paper, launcher
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

	ground = new Ground(400, 650, 800, 10);

	log1 = new Log(600, 580, 150, 150);
	

	paper = new Paper(100,200,70);

    launcher = new Launcher(paper.body, {x:200, y:400});



	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  strokeWeight(4);
  ground.display();
  launcher.display();
  paper.display();
  log1.display();


 
}


function mouseReleased(){
    launcher.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}



