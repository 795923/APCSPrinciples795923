//  Allison Smith
// 	10 / 4
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [2,6,9,1,3,8]
  swap(list, 0, 1)
  functoin swap(list, a,b){
    var temp =list[a];
    list[a]= list[b];
    list[b]= temp;
  }

}

//  The draw function is called @ 30 fps
function draw() {

}
