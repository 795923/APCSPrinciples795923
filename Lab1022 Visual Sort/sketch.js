//  Allison Smith
// 	October 25, 2019
var rectangles = [];
var heights = [];
var rectX = 0;
var numRects = 20;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i=0; i < numRects; i++){
    var rectHeight = random(10,height);
    rectangles[i] = new Rectangle(rectHeight, rectX, width/numRects);
    heights.push(rectHeight);
    rectX = rectX + (width/numRects);
  }
  for(var i=0; i < numRects; i++){
    rectangles[i].render();
  }
}

function draw(){
//insert
  for(var j = 0; j < heights.length; j++){
    for(var i = j; i > 0; i--){
      if (heights[i] < heights[i-1]){
        swap(heights, i, i-1)
        }
      }
    }
  }
