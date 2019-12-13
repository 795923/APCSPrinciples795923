
class Ball{
  construtor(x,y,dx,dy){
    this.cool = x;
    this.super = y;
    this.awesome = dx;
    this.prize = dy;
    this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.cool<0){
  this.awesome = -this.awesome
  }

  if(this.cool>width){
  this.awesome = -this.awesome
  }

  if(this.super<0){
  this.prize = -this.prize
  }

  if(this.super>height){
  this.prize = -this.prize
  }
}

update(){
  this.cool= this.cool + this.awesome
  this.super = this.super + this.prize
}

render(){
  fill(this.clr);
  ellipse(this.cool, this.super, 50, 50)
  }
}
