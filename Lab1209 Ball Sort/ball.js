
class Ball{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.redClr = random(255)
    this.clr = color(this.redClr,0, 0)
  }

run(){
  this.render();
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 40, 40);
  }
}
