var w = 800;
var h = 450;
var n = 30;
var y = [];
for(var i=0; i<n; i++) {
  y.push(h/2);
}
var targetY = [];
for(var i=0; i<n; i++) {
  targetY.push(h/2);
}

var animationTime = 40;
var speed = [];
for(var i=0; i<n; i++) {
  speed.push(0);
}

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(240);
  if( Math.abs(y[0]-targetY[0]) < 1) {
    for(var i=0; i<n; i++) {
      targetY[i] = Math.random() * h;
      speed[i] = (targetY[i] - y[i]) / animationTime;
    }
  }
  for(var i=0; i<n; i++) {
    y[i] = y[i] + speed[i];
    var x = (width/n) * i + (width*0.5/n)
    fill(0);
    ellipse(x, targetY[i], 20, 20);
    fill(255);
    ellipse(x, y[i], 20, 20);
  }
}
