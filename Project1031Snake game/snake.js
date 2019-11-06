//  Allison Smith
//  November 5, 2019


class Snake{
  constructor(x,y,dx,dy){
    this.head = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255));
    this.body = [];
    this.loadSegment()

  }

  loadSegment(){
    this.body.push(createVector(0,0));
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

    // update the body
    this.body[0].x = this.head.x;
    this.body[0].y = this.head.y;
    // update the head
    this.head.add(this.vel);

}

  render(){
  // render head
  fill(this.clr);
  rect(this.head.x, this.head.y, w, w);
  // render the body
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, w, w);
  }
  }
}
