class Paddle{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = 250;
    this.h = 50;
  }

run(){
  this.update();
  this.render();
}

update(){
    var mouseLoc = createVector(mouseX, 725);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
}

render(){
  fill(255, 0,0);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
