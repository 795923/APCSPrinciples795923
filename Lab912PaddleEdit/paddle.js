class Paddle{
  constructor(x,y,id){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255));
    this.w = 250;
    this.h = 50;
    this.id =id
  }

run(){
  this.render();
  this.keyPressed();
}

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }

keyPressed() {
  if(this.id>0){
    if (keyCode === LEFT_ARROW) {
      this.loc.x = this.loc.x - 5;
    }
    else if (keyCode === RIGHT_ARROW) {
      this.loc.x = this.loc.x + 5;
      }
    } else {
        if (keyCode === UP_ARROW) {
          this.loc.x = this.loc.x - 5;
        }
        else if (keyCode === DOWN_ARROW) {
          this.loc.x = this.loc.x + 5;
        }
    }
  }
}
