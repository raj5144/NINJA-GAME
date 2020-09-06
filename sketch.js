var canvas, backgroundImage;

//var gameState = 0;
//var playerCount;
//var allPlayers;
//var distance = 0;
//var database;

var form, player,skeleton1
var game,playerattack,health;

var playerimg,backgroundimg;
var skeleton1img,groundimg;
var playerrunning,playerLeft;
var LeftStand,skeletonhurt;
var skeletonLeft,skeletonhurtleft;
var ThemeSound,HitSound,health2;

function preload(){

  ThemeSound = loadSound('Main.mp3');
  HitSound = loadSound('Hit.mp3');
 // wall_hitSound = loadSound('wall_hit.mp3');
 // hitSound = loadSound('hit.mp3');

  playerimg=loadImage("images/PicsArt_08-25-11.41.36.png")
  playerrunning=loadImage("images/ninjaRun.png")
  playerLeft=loadImage("images/Left.png")
  backgroundimg=loadImage("images/middlewallupdated.png")
  skeleton1img=loadImage("images/PicsArt_08-25-10.15.33.png")
  groundimg=loadImage("images/BACKGROUND.jpg")
  playerattack=loadImage("images/ninja_attack.png")
  LeftStand=loadImage("images/LeftStand.png")
  skeletonhurt=loadImage("images/skeleton.png")
  skeletonLeft=loadImage("images/skeletonLeft.png")
  skeletonhurtleft=loadImage("images/skeletonLefthurt.png")
}
//hitSound.play();
function setup(){

  canvas = createCanvas(displayWidth , displayHeight-145);
  

 // database = firebase.database();
   game = new Game();  
 // game.getState();
 game.start();
}


function draw(){

    game.play();

 // if(gameState === 1){
   // clear();
   // game.play();
 // }
}



