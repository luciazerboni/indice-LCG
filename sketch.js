function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkblue");

  fill("lightyellow");
  stroke("white");
  strokeWeight("5");
  circle(320, 80, 80);
  
  fill("darkgreen");
  stroke("darkgreen");
  rect(0, 320, 400, 80);

  fill("white");
  strokeWeight (0);
  rect(20, 238, 80);

  fill("white");
  strokeWeight (0);
  rect(140, 238, 80);

  fill("white");
  strokeWeight (0);
  rect(260, 238, 80);

  fill("red")
  triangle(10,238,60,180,110,238)

  fill("red")
  triangle(130,238,180,180,230,238)

  fill("red")
  triangle(250,238,300,180,350,238)

  strokeWeight(0);
  fill("brown")
  rect(49,283,20,35);

  strokeWeight(0);
  fill("brown")
  rect(169,283,20,35);

  strokeWeight(0);
  fill("brown")
  rect(289,283,20,35);

  strokeWeight(0);
  fill("lightblue")
  rect(30,253,15,15);
  strokeWeight(0);
  fill("lightblue")
  rect(75,253,15,15);

  strokeWeight(0);
  fill("lightblue")
  rect(150,253,15,15);
  strokeWeight(0);
  fill("lightblue")
  rect(195,253,15,15);

  strokeWeight(0);
  fill("lightblue")
  rect(270,253,15,15);
  strokeWeight(0);
  fill("lightblue")
  rect(315,253,15,15);

  //stella1
  strokeWeight(5);
  stroke("yellow");
  point(40,100);

  strokeWeight(5);
  stroke("yellow");
  point(80,80);

  strokeWeight(5);
  stroke("yellow");
  point(230,90);

  strokeWeight(5);
  stroke("yellow");
  point(110,87);
  
  strokeWeight(5);
  stroke("yellow");
  point(145,100);

  strokeWeight(5);
  stroke("yellow");
  point(220,140);

  strokeWeight(5);
  stroke("yellow");
  point(160,140);
}