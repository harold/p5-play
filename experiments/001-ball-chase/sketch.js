var w = 400;
var h = 400;
var y = h/2;
var targetY = h/2;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(240);
  if( Math.abs(y-targetY) < 1) {
    targetY = Math.random() * h;
  }
  y = y + (0.05 * (targetY - y));
  fill(0);
  ellipse(width/2, targetY, 20, 20);
  fill(255);
  ellipse(width/2, y, 20, 20);
}
