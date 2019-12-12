class Ship{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
    this.angle= 0;
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  var distToplanet;
      distToplanet = this.loc.dist(planet.loc);
      // attract balls
      if(distToplanet < 800){
        this.acc = p5.Vector.sub(planet.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(sliderAttract.value()/10);
      }
      //repell balls
      if(distToplanet < 50){
        planet.loc.x = Math.floor(random(0,790));
        planet.loc.y = Math.floor(random(0,790));
            }
  if(this.loc.x<0){
  this.loc.x = -this.loc.x
  }

  if(this.loc.x>width){
  this.loc.x = -this.loc.x
  }

  if(this.loc.y<0){
  this.loc.y = -this.loc.y
  }

  if(this.loc.y>height){
  this.loc.y = -this.loc.y
  }
}

update(){
  this.vel.limit(sliderLimit.value())
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
