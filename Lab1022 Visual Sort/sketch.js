//  Allison Smith
// 	October 21, 2019
var swaps = 0
var comparisons = 0

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  function swap(list, a,b){
    var temp =list[a];
    list[a]= list[b];
    list[b]= temp;
    swaps++
    }
  for(var i=0; i < 1000; i++){
    rectangle[i] = new rectangle(i, i, i);
  }
  shuffle(list, true);

  //insert
  s1 = millis();
  for(var j = 0; j < list.length; j++){
    for(var i = j; i > 0; i--){
      comparisons++
      if (list[i] < list[i-1]){
        swap(list, i, i-1)
        }
    }
  }
  s2 = millis();
  console.log(list)
  console.log("Insert Sort")
  console.log("Swaps: " + swaps)
  console.log("Comparisons: " + comparisons)
  console.log("Milliseconds: " + (s2-s1))

//bubble
swaps = 0
comparisons = 0
shuffle(list, true);
s3 = millis();
for (j=0; j<list.length-1; j++){
  for (i=0; i<list.length-1-j; i++){
    comparisons++
    if (list[i+1] < list[i]) {
      var tmp = list[i];
      list[i] = list[i+1];
      list[i+1] = tmp;
      swaps++
    }
  }
}
s4 = millis();
console.log(list)
console.log("Bubble Sort")
console.log("Swaps: " + swaps)
console.log("Comparisons: " + comparisons)
console.log("Milliseconds: " + (s4-s3))

//selection
swaps = 0
comparisons = 0
shuffle(list, true);
s5 = millis();
for (var i = 0; i < list.length - 1; i++){
    var index = i;
    for (var j = i + 1; j < list.length; j++){
    comparisons++
    if (list[j] < list[index]){
       index = j;
    }
  }
//  Swapping Code
    var smallerNumber = list[index];
    list[index] = list[i];
    list[i] = smallerNumber;
    swaps++
//  Swapping Code
        }
s6 = millis();
console.log(list)
console.log("Selection Sort")
console.log("Swaps: " + swaps)
console.log("Comparisons: " + comparisons)
console.log("Milliseconds: " + (s6-s5))
}
