//  Allison Smith
//  November 5, 2019
body = [];

class Snake{
  constructor(x,y,dx,dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
//up arrow
    if(keyCode===38){
      this.vel.x = 0;
      this.vel.y = -w;
    }
//down arrow
    else if (keyCode===40) {
      this.vel.x = 0;
      this.vel.y = w;
    }
//left arrow
    else if (keyCode===37) {
      this.vel.x = -w;
      this.vel.y = 0;
    }
//right arrow
    else if (keyCode===39) {
      this.vel.x = w;
      this.vel.y = 0;
    }
  }

  update(){
    this.loc.add(this.vel);

}

  render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, w, w);
  }
}
