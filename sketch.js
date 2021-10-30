const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var arrow
var ball1


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //objectName = new Class()
  bottomground = new Ground(200,390,400,30)
  topground = new Ground(200,10,400,30)
  rightground=new Ground(390,200,30,400)
  leftground=new Ground(10,200,30,400)
  ball1=new Ball(200,40,50,50)

  arrow=createImg("rightarrow.png")
  arrow.position(100,100)
  arrow.size(100,100)
  arrow.mouseClicked(righthorizontal)

  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("red")
  bottomground.display()
  topground.display()
  rightground.display()
  leftground.display()
  ball1.display()
}

function righthorizontal() {
Matter.Body.applyForce(ball1,{x:0,y:0},{x:0.05,y:0})
}