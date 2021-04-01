var hr,min,sc;
var hrAngle,scAngle,minAngle;

function setup() {
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  translate(width/2,height/2)
  rotate(-90)
  background(255,255,255);  
  hr=hour()
  min=minute()
  sc=second()

  hrAngle=map(hr %12,0,12,0,360)
  scAngle=map(sc,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(10)
  line(0,0,50,0)
  pop()

  push()
  rotate(minAngle)
  stroke("red")
  strokeWeight(10)
  line(0,0,80,0)
  pop()

  push()
  rotate(scAngle)
  stroke("yellow")
  strokeWeight(10)
  line(0,0,100,0)
  pop()
  //console.log(sc)
  drawSprites();
}