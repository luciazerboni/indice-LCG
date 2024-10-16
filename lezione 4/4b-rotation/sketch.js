function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  // translate(100,100);
  //degree, radians

  rect(50, 50, 100, 50);
  //--> 50+100, 50+100;
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
  //per cambiare ancor point uso la traslazione
  translate(50,50);
  rotate(45);
  fill("orange");
  circle(200,200,100);

  line(200,150,200,250);
}
