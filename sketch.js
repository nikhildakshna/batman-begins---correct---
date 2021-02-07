const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var lightning;
var lightningANM;
var rain = [];
var umbrella;
var count;


function preload(){
  lightningANM = loadAnimation("1.png","2.png","3.png","4.png");  
  walkingANM = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png");
}

function setup(){
  createCanvas(displayWidth - 10,displayHeight - 100);  

engine = Engine.create();
world = engine.world;    

 
lightning = createSprite(displayWidth/2,displayHeight/2 - 300);    
lightning.addAnimation("moving",lightningANM); 
lightning.scale = 0.5;
man = createSprite(displayWidth/2,displayHeight/2 + displayHeight/5);
man.addAnimation("moving",walkingANM);
man.scale = 0.3;


count = 0; 
Engine.run(engine);
}

function draw(){
background(0);

drawSprites();   


if(frameCount % 10 === 0){
count += 1;
if(count < 101){
  console.log(count);
rain.push(new droplet(random(displayWidth/2 - 200,displayWidth/2 + 200),20),new droplet(random(100,displayWidth - 100),20),new droplet(random(100,displayWidth - 100),20),new droplet(random(100,displayWidth - 100),20));
}
}

//console.log(displayWidth,displayHeight);

for(var n = 0;n < rain.length;n++){
rain[n].display();
rain[n].reposition();
}

umbrella = new Umbrella();

Engine.update(engine);

}