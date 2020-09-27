
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyImage;
function preload()
{
     boyImage = loadImage("plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	var boy_options ={
        isStatic: true
    }

	boy = addImage(200,390,10,20,boy_options);
	World.add(world,boy);



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(boy.position.x,boy.position.y,400,20);
  drawSprites();
 
}



