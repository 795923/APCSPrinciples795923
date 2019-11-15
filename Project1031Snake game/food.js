//  Allison Smith
//  November 15, 2019

class Food{
  constructor(x,y){
    this.food = createVector(x,y);
  }

run(){
  //run update and render functions
  this.update();
  this.render();
}

update(){
  //change location if snake and food touch
  if(snake.head.x === this.food.x &&
     snake.head.y === this.food.y){
      if(w==10){
          this.food.x = Math.floor(random(0,79))*w;
          this.food.y = Math.floor(random(0,79))*w;
      }
      if(w===20){
        this.food.x = Math.floor(random(0, 39))*w;
        this.food.y = Math.floor(random(0,39))*w;
      }
      if(w===40){
        this.food.x = Math.floor(random(0,19))*w;
        this.food.y = Math.floor(random(0,19))*w;
      }
    }
}

render(){
  // render the food
  fill(random(255), random(255), random(255));
  rect(this.food.x, this.food.y, w, w);
  }
}
