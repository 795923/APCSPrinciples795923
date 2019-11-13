//  Allison Smith
//  November 12, 2019

class Snake{
  constructor(x,y,dx,dy){
    this.head = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.body = [];
  }

  loadSegment(){
    //load new body segment
    this.body.push(createVector(0, 0));
  }

  run(){
    //run update, checkEdges, and render functions
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    this.vel.x = 0;
    this.vel.y = 0;
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
    for(var i = this.body.length-1; i >= 0; i--){
      if(i===0){
        this.body[0].x = this.head.x;
        this.body[0].y = this.head.y;
        }
      else{
        this.body[i].x = this.body[i-1].x;
        this.body[i].y = this.body[i-1].y;
         }
       }
    // update the head
    this.head.add(this.vel);
    // add segment
    if(this.head.x === food.food.x &&
      this.head.y === food.food.y){
         this.loadSegment();
      }
}

  render(){
  // render head
  fill (0,250,0);
  rect(this.head.x, this.head.y, w, w);
  // render the body
  for(var i = 0; i < this.body.length; i++){
    rect(this.body[i].x, this.body[i].y, w, w);
    }
  }
}
