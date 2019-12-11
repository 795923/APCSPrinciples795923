//  Allison Smith
// 	December 11, 2019
var list = []
var numbers = 11;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i=0; i < numbers; i++){
    list.push(random(0,1000));
  }
  mySort();
  logNumber();
  logMean();
  logMedian();
}

function mySort(){
  //bubble sort
  for (j=0; j<list.length-1; j++){
    for (i=0; i<list.length-1-j; i++){
      if (list[i+1] < list[i]) {
        var tmp = list[i];
        list[i] = list[i+1];
        list[i+1] = tmp;
      }
    }
  }
}

function logNumber(){
    console.log("List: " + list);
}

function logMean(){
  totalList = 0
  for(i=0; i< numbers; i++){
      totalList = list[i]+totalList
    }
    mean = totalList/11
    console.log("Mean " + mean);
}

function logMedian(){
    median = list[5]
    console.log("Median " + median);
}
