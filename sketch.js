var canvas,backgroundimg;
var gameState = 0;
var playerCount;
var player, form, game;
var database;
var distance;
var allPlayers;
var cars, car1, car2, car3, car4;
var track, car_1, car_2, car_3, car_4;

function Preload(){
  track = loadImage("../images/track.jpg");
  car_1 = loadImage("../images/car1.png");
  car_2 = loadImage("../images/car2.png");
  car_3 = loadImage("../images/car3.png");
  car_4 = loadImage("../images/car4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  drawSprites();
}

function draw(){
  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}

