class Paddle{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255));
    this.w = 250;
    this.h = 50;
  }

run(){
  this.render();
  this.update();
}

update(){
    var mouseLoc = createVector(mouseX, 725);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
