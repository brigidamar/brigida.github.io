

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(random (1, 60))
}

//function draw é onde se desenha tudo//

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
  ellipseMode(CORNER);
  noFill();
  ellipse (width/2, height/2, 200, 200);

  line(width/2, 0, width/2, height);

  point(20, 20,);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
