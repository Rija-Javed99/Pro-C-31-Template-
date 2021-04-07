var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//create arrays

//div height as 300


var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


 //create for loop for the divisions
  
  

//create for loops for diff colored plinkos
    
}
 


function draw() {
  background("black");

  Engine.update(engine);
  ground.display();
  
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  //display plinkos in loops
}
