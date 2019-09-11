
class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
    this.id =id
    this.angle= 0;
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  var distToMainBall;
    if(this.id >= 0) {
      distToMainBall = this.loc.dist(mainBall.loc);
      // attract balls
      if(distToMainBall < 500){
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
      //repell balls
      if(distToMainBall < 150){
        this.acc = p5.Vector.sub(this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult(0.3);
      }
    }
  if(this.loc.x<0){
  this.loc.x = (width)
  }

  if(this.loc.x>width){
  this.loc.x = 0
  }

  if(this.loc.y<0){
  this.loc.y = (height)
  }

  if(this.loc.y>height){
  this.loc.y = 0
  }
}

update(){
  this.vel.limit(5)
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  this.angle = this.angle + .03;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5, 8, 5, 8, 0, -8);
  pop();
  }
}