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
  if(snake.loc.x === this.loc.x &&
     snake.loc.y === this.loc.y){
    this.loc.x = Math.floor(random(0,79))*w;
    this.loc.y = Math.floor(random(0,79))*w;
    // this.loc.x = Math.floor(this.loc.x/w)
    // this.loc.y = Math.floor(this.loc.y/w)
  }
}

render(){
  fill(random(255), random(255), random(255));
  rect(this.loc.x, this.loc.y, w, w);
  }
}

// convert this.location into window coordinates by
//multiplying by global var w and adding header_height
// and taking Math.floor(this.location.x/w) and
// Math.floor(this.location.y/w)
//to get row,col, then draw at row*w, col*w+header_height
// could share code used for snake coordinates math
