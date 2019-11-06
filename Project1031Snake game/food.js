//  Allison Smith
//  November 5, 2019

class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
  }

run(){
  this.update();
  this.render();
}

update(){
  if(snake.head.x === this.loc.x &&
     snake.head.y === this.loc.y){
    this.loc.x = Math.floor(random(0,79))*w;
    this.loc.y = Math.floor(random(0,79))*w;
  }
}

render(){
  // render th
  fill(random(255), random(255), random(255));
  rect(this.loc.x, this.loc.y, w, w);
  }
}
