// idea from https://gist.github.com/bifo90/da5a437500f967162eb5e78df8d63859

// var points = [];
// var mult = 0.005;
var Planet0 = [];
var Planet1 = [];

//setup function
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(50);
  angleMode(DEGREES);
  noiseDetail(1);

  noCursor();
  //background 
  //if we change the size of number, the shape will change
  // var density = 50;
  // var space = width/density;
  // for(var x = 0; x < width; x += space){
  //   for(var y = 0; y < innerHeight; y += space){
  //     //x and y had been add randomness for the start point
  //     var p = createVector(x + random(-10,10), y + random(-10, 10));
  //     points.push(p);
  //   }
  // }
 }

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

const pl_1 = new Planet('planet1','rgb(255,100,50)',55,0,0,5);
const pl_2 = new Planet('planet2','orange',20,60,1,1);
const pl_3 = new Planet('planet3','#937D64',15,80,1,1.15);
const pl_4 = new Planet('planet4','dodgerblue',15,105,1,1.5);
const pl_5 = new Planet('planet5','red',14,120,1,1.3);
const pl_6 = new Planet('planet6 Orbit','grey',15,170,0,1);
const pl_7 = new Planet('planet7','pink',18,155,1,1.30);
const pl_8 = new Planet('planet8','darkorange',17,190,1,1.25);
const pl_9 = new Planet('planet9','lightgreen',17,210,1,1.15);
const pl_10 = new Planet('planet10','cyan',15,230,1,1.1);
const pl_11 = new Planet('planet11','gold',13,250,1,1.05);
let the_moon = 0;

function draw(){
  background(0,0,35,25); 
  star();

  var galaxy = { 
    locationX : random(width),
    locationY : random(height),
    size : random(2,8)
  }
  ellipse(mouseX ,mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size);

  translate(width/2,height/2);

  center_sun();
  yellow_planet();
  gray_planet();
  blue_planet();
  red_planet();
  grey_circle();
  pink_ball();
  orange_ball();
  lightgreen_ball();
  lightblue_ball();
  lightyellow_ball();
}

//No using anymore
// function bg(){
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

function star(){

  for(var i = 0; i < 2; i++){
    p1 = new planet0();
    Planet1.push(p1);
  }

  for (var i = 0; i < Planet1.length; i++){
    Planet1[i].update();
    Planet1[i].show();
  }

  for(var i = 0; i < 10; i++){
    p = new planet();
    Planet0.push(p);
  }

  for(var i = 0; i < Planet0.length; i++){
    //second function
    if(Planet0[i].alpha > 0){
      Planet0[i].update();
      Planet0[i].show();
    } else {
      Planet0.splice(i, 1);
    }
  }

  console.log(Planet0.length);
}

function center_sun(){
  noStroke();
  fill(pl_1.color);
  circle(pl_1.distance, pl_1.distance, pl_1.dimension);  
}

function yellow_planet(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_2.distance + (pl_2.dimension * 2) + 6);
  //Draw this.Planet
  rotate(pl_2.angle);
  noStroke();
  fill(pl_2.color);
  circle(pl_2.distance, pl_2.distance, pl_2.dimension);
  pop(); 
  pl_2.angle += pl_2.speed;
}

function gray_planet(){
  push();
    //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_3.distance + (pl_3.dimension * 3) + 17);
    //Draw this.Planet
  rotate(pl_3.angle);
  noStroke();
  fill(pl_3.color);
  circle(pl_3.distance, pl_3.distance, pl_3.dimension);
  pop(); 
  pl_3.angle += pl_3.speed;
}

function blue_planet(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_4.distance + (pl_4.dimension * 2) + 20);
  //Draw this.Planet
  rotate(pl_4.angle);
  noStroke();
  fill(pl_4.color);
  circle(pl_4.distance,pl_4.distance,pl_4.dimension);
  //Moon
  fill('white');
  translate(pl_4.distance,pl_4.distance)
  rotate(the_moon);
  circle(10,10,2);
  pop();   
  pl_4.angle += pl_4.speed; 
  the_moon += 1;
}

function red_planet(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_5.distance + (pl_5.dimension * 2) + 28);
  //Draw this.Planet
  rotate(pl_5.angle);
  noStroke();
  fill(pl_5.color);
  circle(pl_5.distance,pl_5.distance,pl_5.dimension);
  pop();   
  pl_5.angle += pl_5.speed;  
}

function grey_circle(){
  push();
  //Draw this.Planet orbit
  strokeWeight(6);
  stroke(pl_6.color);
  noFill();
  rotate(20);
  ellipse(0,0,pl_6.distance * 2.3, pl_6.distance * 2)
  pop();    
}

function pink_ball(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_7.distance + (pl_7.dimension * 2) + 35);
  //Draw this.Planet
  rotate(pl_7.angle);
  noStroke();
  fill(pl_7.color);
  circle(pl_7.distance,pl_7.distance,pl_7.dimension);
  pop();   
  pl_7.angle += pl_7.speed;  
}

function orange_ball(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_8.distance + (pl_8.dimension * 2) + 55);
  //Draw this.pl_8
  rotate(pl_8.angle);
  noStroke();
  fill(pl_8.color);
  circle(pl_8.distance,pl_8.distance,pl_8.dimension);
  //Draw pl_8 Ring
  noFill();
  stroke('grey');
  ellipse(pl_8.distance,pl_8.distance,45,20);
  pop();   
  pl_8.angle += pl_8.speed;  
}

function lightblue_ball(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_9.distance + (pl_9.dimension * 2) + 60);
  //Draw this.Planet
  rotate(pl_9.angle);
  noStroke();
  fill(pl_9.color);
  circle(pl_9.distance, pl_9.distance, pl_9.dimension);
  pop(); 
  pl_9.angle += pl_9.speed;
}

function lightgreen_ball(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_10.distance + (pl_10.dimension * 2) + 72);
  //Draw this.Planet
  rotate(pl_10.angle);
  noStroke();
  fill(pl_10.color);
  circle(pl_10.distance, pl_10.distance, pl_10.dimension);
  pop(); 
  pl_10.angle += pl_10.speed;
}

function lightyellow_ball(){
  push();
  //Draw this.Planet orbit
  strokeWeight(1);
  stroke('grey');
  noFill();
  circle(0,0,pl_11.distance + (pl_11.dimension * 2) + 85);
  //Draw this.Planet
  rotate(pl_11.angle);
  noStroke();
  fill(pl_11.color);
  circle(pl_11.distance,pl_11.distance,pl_11.dimension);
  pop(); 
  pl_11.angle += pl_11.speed;
}
