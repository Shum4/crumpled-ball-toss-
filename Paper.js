class Paper 
{
  constructor(x, y,radius) 
  { 
   
    var options = 
    { 
     
        'restitution':0.0,
        'friction':0.2,
        'density':1.2
    }
    
    this.image=loadImage("sprites/paper.png");
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
   


    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("white");
    image(this.image, 0,0,this.radius,this.radius);
    pop();
  }
};
