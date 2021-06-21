
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var division = []
var divisionHeight= 300
var particle =[]
var plinkos = []
var line;

var divisionHeight = 300;

var gameState = "PLAY";

var count = 0
var score = 0

function preload(){

}




function setup() {
  createCanvas(800,700);
  engine = Engine.create()
  world = engine.world


  ground = new Ground(400,690,800,20)


  for (var i = 0; i<=width; i= i+80) {
    division.push(new Division(i,height-divisionHeight/2, 10, divisionHeight))
  }

  for (var j=75; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 75))
  }
  for (var j=50; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j, 175))
  }
  for (var j=75; j<=width; j = j+50){
    plinkos.push(new Plinko(j, 275))
  }
  for (var j=50; j<=width-10; j = j+50){
    plinkos.push(new Plinko(j, 375))
  }


  //for()

  Engine.run(engine)

  createSprite(400, 200, 50, 50);
}

function draw() {
  rectMode(CENTER)
  background(255,255,255);

  textSize(35)
  text("Score :"+score,20,40)
  fill(255)

  textSize(35)
  text("500" , 5, 550);
  text("500" , 89, 550);
  text("500" , 160, 550);
  text("500" , 240, 550);
  text("500" , 320, 550);
  text("500" , 400, 550);
  text("500" , 480, 550);
  text("500" , 560, 550);
  text("500" , 640, 550);
  text("500" , 720, 550);

  drawSprites();



  for (var n= 0; n<division.length; n++){
    division[n].display();
  }

  if(frameCount %60 === 0){
    particles.push(new particle(random(width/2-30, width/2+30),10,10))
  }

  for (var h = 0; h<particles.length; h++){
    particles[h].display()
  }

  for (var j=0; j<plinkos.length; j++){
    plinkos[j].display
  }


  ground.display()
}