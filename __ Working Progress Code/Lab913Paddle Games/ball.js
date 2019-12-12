class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0, .2);
    this.clr = color(random(255), random(255), random(255))
    this.id =id
    this.score = 0
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
  //left
    if(this.loc.x<0){
    this.vel.x = -this.vel.x
    }
//right
    if(this.loc.x>width){
    this.vel.x = -this.vel.x
    }
//top
    if(this.loc.y<0){
    this.vel.y = -this.vel.y
    }
//score
    if(750<this.loc.y<800){
    this.score= this.score +1
    }
//paddle
    if(this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h){
      this.vel.y = -this.vel.y
    }
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    textSize(32);
    text(this.score, 10, 30);
    fill(0, 102, 153);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
    }
  }
