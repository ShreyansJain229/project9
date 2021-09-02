
function setup() {
  createCanvas(400,400);
  background(30);
}

function draw() 
{
  if(keyIsDown(UP_ARROW)){
    background("red");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("green");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("yellow");
  }
}
