
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(1,0);
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
  this.loc.add(this.vel.x);
  this.loc.add(this.vel.y);
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
