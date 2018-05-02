function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(300, 300);


  let hr = hour();
  let mi = minute();
  let sec = second();

  fill(255);
// rotate(90);
  noStroke();
  textSize(50);
  text(hr + ':' + mi, -65, 15);

  // stroke(200);
  // noFill();
  // ellipse(0, 0, 250, 250,0, 360);

  rotate(-90);

  strokeWeight(60);

  stroke(251, 55, 139);
  noFill();
  let secAngl = map(sec, 0, 60, 0, 360);
  arc(0, 0, 500, 500, 0, secAngl);

  stroke(203, 251, 5);
  let minAngl = map(mi , 0, 60, 0, 360);
  arc(0, 0, 375, 375, 0, minAngl);

  stroke(0, 222, 245);
  let hrsAngl = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 250, 250, 0, hrsAngl);


  // push();
  // rotate(secAngl);
  // stroke(255)
  // strokeWeight(10);
  // line(0, 0, 100, 0);
  // pop();
  //
  // push();
  // rotate(minAngl);
  // stroke(225);
  // strokeWeight(10);
  // line(0, 0, 75, 0);
  // pop();
  //
  // push();
  // rotate(hrsAngl);
  // stroke(200);
  // strokeWeight(10);
  // line(0, 0, 50, 0);
  // pop();
  //
  // stroke(0);
  // strokeWeight(10);
  // point(0, 0);
}
