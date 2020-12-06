
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const ma = Matter.Constraint;

var back,boui,boy,tre,gru,mang1,mang2,mang3;
var sling1,stone1;

function preload()
{
	back = loadImage("bac.jpg");
	boui = loadImage("boy.png");
	tre = loadImage("tree.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(100,570,40,40);
	boy.addImage(boui);
	boy.scale = 0.1;

	tree = createSprite(500,400,40,40);
	tree.addImage(tre);
	tree.scale = 0.4;

	stone1 = new STONE();

	gru = new GROUND();

	mang1 = new MANGO(330,300);
	mang2 = new MANGO(380,370);
	mang3 = new MANGO(420,270);
	mang4 = new MANGO(470,360);
	mang5 = new MANGO(520,240);
	mang6 = new MANGO(560,320);
	mang7 = new MANGO(620,270);
	mang8 = new MANGO(670,350);
	
	sling1 = new SLING(stone1.body,{x:50,y:510});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(back);
  
  drawSprites();

  stone1.display();
  gru.display();
  mang1.display();
  mang2.display();
  mang3.display();
  mang4.display();
  mang5.display();
  mang6.display();
  mang7.display();
  mang8.display();
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

	sling1.fly()

}