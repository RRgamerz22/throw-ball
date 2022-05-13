
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle = 60;
var Fan1;

function setup() {
  createCanvas(400, 400);

  my_engine = Engine.create();
  my_world = my_engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };

  btn2 = createImg('up.png');
  btn2.position(350, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);

  rotating_ground = Bodies.rectangle(100, 300, 100, 20, ground_options);
  World.add(my_world, rotating_ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(my_world, ball);


  ground = Bodies.rectangle(100, 400, 650, 20, ground_options);
  World.add(my_world, ground);

  Fan1 = new Ground(10,10,20,30);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(my_engine);

  
// please share the screenshot of the error Ishmeet / Ritik



  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 650, 20);
  Fan1.show();

  //console.log(ground.position.y);



}

function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
