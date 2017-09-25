

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(1)
}


function draw() 
{
  background( random(0, 255), random(0, 255), random(0, 255) );

  fill(255);
  stroke(150);
  strokeWeight(8);
  rectMode(CENTER)
  noFill();
  rect(width/2, height/2, 250, 250);

  fill(0, 255, 0);
  ellipse (width/2, height/2, 200, 200);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
