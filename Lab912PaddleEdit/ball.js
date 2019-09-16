class Ball{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.clr = color(random(255), random(255), random(255))
    this.id =id
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x<0){
    this.vel.x = -this.vel.x
    }

    if(this.loc.x>width){
    this.vel.x = -this.vel.x
    }

    if(this.loc.y<0){
    this.vel.y = -this.vel.y
    }

    if(this.loc.y>height){
    this.vel.y = -this.vel.y
    }
    if(this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h){
      this.vel.y = -this.vel.y
    }
  }

  update(){
    this.vel.limit(5)
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
    }
  }