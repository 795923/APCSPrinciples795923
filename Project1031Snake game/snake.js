//  Allison Smith
//  November 1, 2019

class Snake{
  constructor(x,y,dx,dy,id){
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
    }else if (keyCode===40) {
      this.vel.x = 0;
      this.vel.y = w;//down arrow
    }else if (keyCode===37) {
      this.vel.x = -w;
      this.vel.y = 0;//left arrow
    }else if (keyCode===39) {
      this.vel.x = w;
      this.vel.y = 0;//right arrow
    }
  }

  update(){
    this.loc.add(this.vel);

}

  render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, 10, 10);
  }
}


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

//splice code example
// for(var i = ball.length - 1; i >= 0; i--){
//   if(ball[i].isColliding()){
//     ball.splice(i, 1)
//     health= health - 1
//   }
// }
