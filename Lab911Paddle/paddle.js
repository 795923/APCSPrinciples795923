class Paddle{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
    this.id =id
  }

run(){
  // this.checkEdges();
  // this.update();
  this.render();
}

// checkEdges(){
//   if(this.loc.x<0){
//   this.loc.x = (width)
//   }
//
//   if(this.loc.x>width){
//   this.loc.x = 0
//   }
//
//   if(this.loc.y<0){
//   this.loc.y = (height)
//   }
//
//   if(this.loc.y>height){
//   this.loc.y = 0
//   }
// }

// update(){
//   this.vel.limit(5)
//   this.vel.add(this.acc);
//   this.loc.add(this.vel);
// }

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}
