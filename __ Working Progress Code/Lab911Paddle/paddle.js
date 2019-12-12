class Paddle{
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
  if(this.loc.y<0){
  this.loc.y = -this.loc.y
  }

  if(this.loc.y>height){
  this.loc.y = -this.loc.y
  }
}

update(){
  this.loc.add(this.vel)
  this.vel.limit(5)
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
