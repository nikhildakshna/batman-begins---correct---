class droplet{
constructor(x,y){
var options = {
'friction': 0.1,
'density': 1
}
this.body = Bodies.circle(x,y,4,options);
this.radius = 3;


World.add(world,this.body);
}

display(){
var pos = this.body.position;    
push();
translate(pos.x,pos.y);
fill("blue");
ellipseMode(RADIUS);
ellipse(0,0,this.radius);
pop();
}

reposition(){
if(this.y > displayHeight){
var pos = {x: random(displayWidth/2 - 500,displayWidth/2 + 500),y: 100};
Matter.Body.translate(this.body,pos);
}
}


}