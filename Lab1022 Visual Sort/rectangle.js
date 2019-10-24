//  Allison Smith
// 	October 21, 2019
class Rectangle{
constructor(x,y,w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  }

  render(){
    fill(0,250,0);
    rect(this.x, this.y, this.w, this.h)
  }
}
