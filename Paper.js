class Paper {
   constructor(){
   var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
   }
   this.body=Matter.Bodies.circle(96,420,39,options);
   World.add(world,this.body);
   }
   display() {
   push();
   rectMode(RADIUS);
   fill("red");
   ellipse(this.body.position.x,this.body.position.y,39,39);
   pop();
   }
}