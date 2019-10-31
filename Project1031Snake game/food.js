//  Allison Smith
//  October 31, 2019

class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = 250;
    this.h = 50;
  }

run(){
  this.update();
  this.render();
}

update(){
  if(snake === food){
    this.loc.x = Math.floor(this.loc.x/w) 
    this.loc.y = Math.floor(this.loc.y/w)
  }
}

render(){
  fill(255, 250,250);
  rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}

// convert this.location into window coordinates by
//multiplying by global var w and adding header_height
// and taking Math.floor(this.location.x/w) and
// Math.floor(this.location.y/w)
//to get row,col, then draw at row*w, col*w+header_height
// could share code used for snake coordinates math
