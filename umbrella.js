class Umbrella{
constructor(){
this.body = Bodies.circle(displayWidth/2 +10,displayHeight/2 + 115,70,{isStatic: true});
this.radius = 100;

World.add(world,this.body);

};
}