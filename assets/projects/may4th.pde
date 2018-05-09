String txt;

float y = 0;


void setup() {
  size(1200, 600, P3D);

  String[] lines = loadStrings("e1.txt");
  txt = join(lines, "\n");
  y = height;

}


void draw() {
  background(0);
  translate(width/2, height/2);

  fill(238, 213, 75);
  textSize(width*0.04);
  textAlign(CENTER);
  rotateX(PI / 4);

  float w = -width*0.7;
  text(txt, -w/2, y, w, height * 10);

  y-=1;
}
