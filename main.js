var points = [];
var mult = 0.005;

//setup function
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(50);
  angleMode(DEGREES);
  noiseDetail(1);

  //background 
  //if we change the size of number, the shape will change
  var density = 50;
  var space = width/density;
  for(var x = 0; x < width; x += space){
    for(var y = 0; y < innerHeight; y += space){
      //x and y had been add randomness for the start point
      var p = createVector(x + random(-10,10), y + random(-10, 10));
      points.push(p);
    }
  }
}

// function draw(){
//   noStroke();
//   for(var x1 = 0; x1 < points.length; x1++){
//     //color part
//     //red
//     var color1 = map(points[x1].x, 0 , width, 50, 255);
//     //green
//     var color2 = map(points[x1].y, 0 , height, 50, 255);
//     //blue
//     var color3 = map(points[x1].x, 0 , width, 255, 50);
//     //yellow
//     var color4 = map(points[x1].y, 0 , height, 255, 255);
//     //purple
//     var color5 = map(points[x1].x, 0 , width, 255, 50);
    
//     //fill(color1, color2, color3);
//     fill(color1, color2, color3, color4, color5);

//     var angle = map(noise(points[x1].x * mult, points[x1].y * mult), 0, 1, 0, 720);
    
//     //random points add on vector
//     points[x1].add(createVector(cos(angle), sin(angle)));
//     //ellipse function
//     ellipse(points[x1].x, points[x1].y,1);
//   }
// }

class Planet {
  constructor(name,color,dimension,distance,angle,speed){
  this.name = name;
  this.color = color;
  this.dimension = dimension;
  this.distance = distance;
  this.angle = angle;
  this.speed = speed;
  }
}

  const sun = new Planet('Sun','rgb(255,100,50)',50,0,0,0);
  const mercury = new Planet('Mercury','orange',15,60,1,2);
  const venus = new Planet('Venus','#937D64',25,70,1,1.5);
  const earth = new Planet('Earth','dodgerblue',20,95,1,1.75);
  const mars = new Planet('Mars','red',10,80,1,1.60);
  const asteroidsOrbit = new Planet('Asteroids Orbit','grey',5,140,0,0);
  const jupiter = new Planet('Jupiter','pink',38,125,1,1.30);
  const saturn = new Planet('Saturn','darkorange',27,160,1,1.25);
  const uranus = new Planet('Uranus','lightgreen',24,180,1,1.15);
  const neptune = new Planet('Neptune','cyan',15,200,1,1.1);
  const pluto = new Planet('Pluto','gold',15,220,1,1.05);
  let rotationMoon = 0;

function draw(){
  draw1();
  draw2();
}

function draw1(){
  bg();
}
function draw2(){
  //background(50);
  translate(width/2,height/2);
  center_sun();
  planet1();
  planet2();
  planet3();
  planet4();
  planet5();
  planet6();
  planet7();
  planet8();
  planet9();
  planet10();
}

function bg(){
  noStroke();
  for(var x1 = 0; x1 < points.length; x1++){
    //color part
    //red
    var color1 = map(points[x1].x, 0 , width, 50, 255);
    //green
    var color2 = map(points[x1].y, 0 , height, 50, 255);
    //blue
    var color3 = map(points[x1].x, 0 , width, 255, 50);
    //yellow
    var color4 = map(points[x1].y, 0 , height, 255, 255);
    //purple
    var color5 = map(points[x1].x, 0 , width, 255, 50);
    
    //fill(color1, color2, color3);
    fill(color1, color2, color3, color4, color5);

    var angle = map(noise(points[x1].x * mult, points[x1].y * mult), 0, 1, 0, 720);
    
    //random points add on vector
    points[x1].add(createVector(cos(angle), sin(angle)));
    //ellipse function
    ellipse(points[x1].x, points[x1].y,1);
  }
}

//the center of the plants
function center_sun(){
  noStroke();
  fill(sun.color);
  circle(sun.distance,sun.distance,sun.dimension);  
}

function planet1(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,mercury.distance + (mercury.dimension * 2) + 6);
  //Draw this.Planet
  rotate(mercury.angle);
  noStroke();
  fill(mercury.color);
  circle(mercury.distance,mercury.distance,mercury.dimension);
  pop(); 
  mercury.angle += mercury.speed;
}

function planet2(){
  push();
    //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,venus.distance + (venus.dimension * 2) + 10);
    //Draw this.Planet
  rotate(venus.angle);
  noStroke();
  fill(venus.color);
  circle(venus.distance,venus.distance,venus.dimension);
  pop(); 
  venus.angle += venus.speed;
}

function planet3(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,earth.distance + (earth.dimension * 2) + 20);
  //Draw this.Planet
  rotate(earth.angle);
  noStroke();
  fill(earth.color);
  circle(earth.distance,earth.distance,earth.dimension);
  //Moon
  fill('white');
  translate(earth.distance,earth.distance)
  rotate(rotationMoon);
  circle(10,10,2);
  pop();   
  earth.angle += earth.speed; 
  rotationMoon += 1;
}

function planet4(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,mars.distance + (mars.dimension * 2) + 28);
  //Draw this.Planet
  rotate(mars.angle);
  noStroke();
  fill(mars.color);
  circle(mars.distance,mars.distance,mars.dimension);
  pop();   
  mars.angle += mars.speed;  
}

function planet5(){
  push();
  //Draw this.Planet orbit
  strokeWeight(6);
  stroke(asteroidsOrbit.color);
  noFill();
  rotate(20);
  ellipse(0,0,asteroidsOrbit.distance * 2.3,asteroidsOrbit.distance * 2)
  //Draw this.Planet
  pop();    
}

function planet6(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,jupiter.distance + (jupiter.dimension * 2) + 35);
  //Draw this.Planet
  rotate(jupiter.angle);
  noStroke();
  fill(jupiter.color);
  circle(jupiter.distance,jupiter.distance,jupiter.dimension);
  pop();   
  jupiter.angle += jupiter.speed;  
}


function planet7(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,saturn.distance + (saturn.dimension * 2) + 55);
  //Draw this.Planet
  rotate(saturn.angle);
  noStroke();
  fill(saturn.color);
  circle(saturn.distance,saturn.distance,saturn.dimension);
  //Draw Saturn Ring
  noFill();
  stroke('grey');
  ellipse(saturn.distance,saturn.distance,45,20);
  pop();   
  saturn.angle += saturn.speed;  
}

function planet8(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,uranus.distance + (uranus.dimension * 2) + 60);
  //Draw this.Planet
  rotate(uranus.angle);
  noStroke();
  fill(uranus.color);
  circle(uranus.distance,uranus.distance,uranus.dimension);
  pop(); 
  uranus.angle += uranus.speed;
}

function planet9(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,neptune.distance + (neptune.dimension * 2) + 72);
  //Draw this.Planet
  rotate(neptune.angle);
  noStroke();
  fill(neptune.color);
  circle(neptune.distance,neptune.distance,neptune.dimension);
  pop(); 
  neptune.angle += neptune.speed;
}
function planet10(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pluto.distance + (pluto.dimension * 2) + 85);
  //Draw this.Planet
  rotate(pluto.angle);
  noStroke();
  fill(pluto.color);
  circle(pluto.distance,pluto.distance,pluto.dimension);
  pop(); 
  pluto.angle += pluto.speed;
}