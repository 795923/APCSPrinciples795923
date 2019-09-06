
class Ship{
  constructor(x,y,z,dx,dy,dz,id){
    this.loc = createVector(x,y, z);
    this.vel = createVector(dx,dy, dz);
    this.clr = color(random(255), random(255), random(255))
    this.id =id
    this.angle = 0;
    }
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
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

  push()
  translate(this.loc.x, this.loc.y);
  rotate(this.angle);
  triangle(-5, 8, 5, 8, 0, -8);
  pop();

  this.vel.limit(5)
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill(this.clr);
  triangle(this.loc.x-5, this.loc.y+8, this.loc.z, this.loc.z-8);
  }
}
