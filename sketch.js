
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1, rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
	createCanvas(windowWidth/2, windowHeight/2);


	engine = Engine.create();
	world = engine.world;

	var roof = new Roof(300, 200, 1000, 30);

	var bob1 = new Bob(1300, 200, 20);
	var bob2 = new Bob(1100, 200, 20);
	var bob3 = new Bob(900, 200, 20);
	var bob4 = new Bob(700, 200, 20);
	var bob5 = new Bob(500, 200, 20);

	var rope1 = new Rope(roof.Body, bob1.Body);
	var rope2 = new Rope(roof.Body, bob2.Body);
	var rope3 = new Rope(roof.Body, bob3.Body);
	var rope4 = new Rope(roof.Body, bob4.Body);
	var rope5 = new Rope(roof.Body, bob5.Body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

   roof.display();

   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(bob2.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(bob3.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(bob4.body, {x: mouseX , y: mouseY});
    Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

