// Keith O'Hara <kohara@bard.edu>
// http://www.nahee.com/spanky/www/fractint/circle_type.html

var s = 0.93980;
var y = 0; 
var x = 0;


function setup(){
  createCanvas(windowWidth, windowHeight);
  fill(0);
  background(255);
}


function draw(){
  if (y < height){
    for (var x = 0; x < width; x++){
      var z = Math.floor(s*(x*x + y*y));
      if (z % 2 === 0){
        point(x, y);
      }
    }
    y = y + 1;
  }
}
