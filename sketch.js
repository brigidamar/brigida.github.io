

function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  background( random(0, 255), random(0, 255), random(0, 255) );

  fill(255);
  stroke(150);
  strokeWeight(8);
  rect(30, 10, 250, 250);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
