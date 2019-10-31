//  Allison Smith
//  October 31, 2019

class Snake{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0, .2);
    this.clr = color(random(255), random(255), random(255))
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
//left edge
    if(this.loc.x<0){
    this.vel.x = -this.vel.x
    }
//right edge
    if(this.loc.x>width){
    this.vel.x = -this.vel.x
    }
//top edge
    if(this.loc.y<0){
    this.vel.y = -this.vel.y
    }
//score
    for(var i = ball.length - 1; i >= 0; i--){
      if(ball[i].isColliding()){
        ball.splice(i, 1)
        health= health - 1
      }
    }
//paddle
    if(this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h){
      this.vel.y = -this.vel.y
      score= score + 1
    }
  }

  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
//Health text
    fill(250, 0, 0);
    textSize(32);
    text("Health: " + health, 10, 30);
//Score text
    fill(0, 250, 0);
    textSize(32);
    text("Score: " + score, 650, 30);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
  isColliding(){
    if(this.loc.y > 850){
      return true
    }
  }
}

// location 		// vector = location of the head
// velocity 		// vector = direction of movement
// clr 			// rgb triple of type color
// body 		// array of segments.
// add a segment after eating food.
// each segment follows the segment in front of it.
// each segment has a location, this can be a vector.
// Might want segments to be an object, but for now, keep it simple.
// update function  // use velocity to update the location of the head and body segments. render function  // use this.clr to set the pen color
// // use this.location to draw the head, convert location into window coordinates by //multiplying by global var w and adding header_height and taking //Math.floor(this.location.x/w) and Math.floor(this.location.y/w) to get row,col, then //draw at row*w, col*w+header_height
// //then do the same for each segment of the body in a for-loop grow function
// // add a segment to the body
// tangled function
// // call AFTER update test whether the snake got tangled up, return True if so
// // convert to row,col to compare locations.  Maybe write a function for that?
