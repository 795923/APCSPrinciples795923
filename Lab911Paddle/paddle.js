class Paddle{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
  }

run(){
  this.update();
  this.render();
}

update(){
  this.loc.x = this.loc.x +1;
}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}
