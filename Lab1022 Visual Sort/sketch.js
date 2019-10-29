//  Allison Smith
// 	October 25, 2019
var rectangles = [];
var heights = [];
var rectX = 0;
var numRects = 20;
var horizLoc = [];

function setup() {
  frameRate(5);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i=0; i < numRects; i++){
    var rectHeight = random(10, height);
    rectangles[i] = new Rectangle(rectHeight, rectX, width/numRects);
    heights.push(rectHeight);
    horizLoc.push(rectX);
    rectX = rectX + (width/numRects);
  }
  for(var i=0; i < numRects; i++){
    rectangles[i].render();
  }
}

function draw(){
//insert
 for(var j = 0; j < heights.length; j++){
      background(5,5,5);
      for (n=0; n < numRects; n++){
        rectangles[n].render();
        }
      if (heights[j+1] < heights[j]){
        var tmp = heights[j];
        rectangles[j] = new Rectangle(heights[j+1], horizLoc[j], width/numRects)
        rectangles[j+1] = new Rectangle(heights[j], horizLoc[j+1], width/numRects)
        heights[j] = heights[j+1]
        heights[j+1] = tmp
        }
    }
  }
