class Rectangle{
constructor(x,y,l){
  this.x = x;
  this.y = y;
  this.l = l;
}

render(){
fill(250, 0, 0);
rect(this.x, this.y, 100, this.l)
}
}
