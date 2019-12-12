class Planet{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(255,105,180)
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
  this.vel.limit(5)
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
