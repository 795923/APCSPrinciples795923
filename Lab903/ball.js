
class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.loc.x<0){
  this.vel.x = -this.vel.x
  }

  if(this.loc.x>width){
  this.vel.x = -this.vel.x
  }

  if(this.loc.y<0){
  this.vel.y = -this.vel.y
  }

  if(this.loc.y>height){
  this.vel.y = -this.vel.y
  }
}

update(){
  this.loc.add(this.vel);
  this.vel.add(this.acc);
  //this.acc = p5.Vector(this.loc, other.loc);
  //this.acc.normalized();
  //this.acc.mult(0.5);
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 10, 10);
  }
}
