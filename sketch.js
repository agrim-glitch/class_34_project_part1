
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {

back1 = loadImage("back2.png")

}

function setup() {
  createCanvas(2500, 800);
  engine = Engine.create();
  world = engine.world;


  g1 = new Ground(1250,780,2600,20);

  b1 = new Box(1600,730,70,70);
  b2 = new Box(1600,660,70,70);
  b3 = new Box(1600,590,70,70);
  b4 = new Box(1600,520,70,70);
  b5 = new Box(1600,450,70,70);
  b6 = new Box(1450,730,70,70);
  b7 = new Box(1450,660,70,70);
  b8 = new Box(1450,590,70,70);
  b9 = new Box(1450,520,70,70);
  b11 = new Box(1750,730,70,70);
  b12 = new Box(1750,660,70,70);
  b13 = new Box(1750,590,70,70);

  c1 = new Box(1300,730,70,70);
  c2 = new Box(1300,660,70,70);
  c3 = new Box(1300,590,70,70);
  c4 = new Box(1300,520,70,70);
  c5 = new Box(1300,450,70,70);
 



  h1 = new Paper(700,600,300,200);
  rope = new Chain(h1.body,{x:1000,y:300})
  e1 = new Enemy(2000,500,250,450)

	Engine.run(engine);
  
}

function draw() {
  
  background(0);
  image(back1,1250,400,2500,800)

  textSize(100)
  //text(mouseX + ' , '+ mouseY,400,500);



  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b7.display();
  b8.display();
  b9.display();
  b6.display();
  b11.display();
  b12.display();
  b13.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  h1.display();
//  rope.show();
  e1.display();

}
function mouseDragged(){
  Matter.Body.setPosition(h1.body, {x: mouseX , y: mouseY});
}
