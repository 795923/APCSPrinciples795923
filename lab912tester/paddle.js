class Paddle{
  constructor(x,y,dx,dy,id){

    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255))
    this.count = 0;
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){

}

update(){

    var mouseLoc = createVector(mouseX, 500);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
    if (this.count++<10)console.log(this.loc);

}

render(){
  fill(255);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
