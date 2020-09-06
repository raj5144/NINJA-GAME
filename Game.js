class Game {
  constructor(){

  }
  start(){
    ThemeSound.play();
    //ThemeSound.resume();
    player = createSprite(200,200);
    skeleton1= createSprite(900,200);
   health = createSprite(200,200,90,7);
    health.shapeColor= "yellow";

   health2 = createSprite(200,200,90,7);
    health2.shapeColor= "green";
    //health.velocityX=skeleton1.velocityX;
    //health.velocityY=skeleton1.y-5;
    // fill(0, 200, 0);
    player.addImage("PLAYER",playerimg)
    player.scale = 0.4;
    skeleton1.addImage("ENEMY",skeleton1img)
    skeleton1.addImage("HURT",skeletonhurt)
    skeleton1.addImage("SKLLEFT",skeletonLeft)
    skeleton1.addImage("HURTLEFT",skeletonhurtleft)
    skeleton1.scale = 0.17;
    player.addImage("RUN",playerrunning)
    player.addImage("RUNLEFT",playerLeft)
    player.addImage("ATTACK",playerattack);
    player.addImage("LEFTSTAND",LeftStand);

  }
  play(){
    background("white");
    health.x =skeleton1.x-10;
    health.y = skeleton1.y-80;

    health2.x = player.x-10;
    health2.y = player.y-80;

  // camera.position.x = displayWidth/2;
   //camera.position.y = player.y;
   if(skeleton1.y >100 && skeleton1.y < 300){
    skeleton1.velocityY=2;
   }
   if(skeleton1.y===80){
    skeleton1.velocityY=2;
  }
  if(skeleton1.y===400){
    skeleton1.velocityY=-2;
  }
  if(skeleton1.x <950 && skeleton1.x > 800){
    skeleton1.changeAnimation("ENEMY",skeleton1img);
  }

  if(skeleton1.x > 1200 ){
    skeleton1.changeAnimation("SKLLEFT",skeletonLeft);
  }
   if(skeleton1.x <950 && skeleton1.x > 800){
    skeleton1.velocityX=2;
   }
   if(skeleton1.x > 1200 ){
   skeleton1.velocityX=-2;
   }
  
   player.changeAnimation("PLAYER",playerimg);

  if(keyIsDown(UP_ARROW)){
   player.y -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y += 10
   }
   if(keyIsDown(RIGHT_ARROW)){
    player.x += 10
    //player.addImage("RUNNING",playerrunning)
    player.changeAnimation("RUN",playerrunning);
   }
   if(keyIsDown(LEFT_ARROW)){
    player.x -= 10
    player.changeAnimation("RUNLEFT",playerLeft);
   }
   if(keyWentUp(LEFT_ARROW)){
    player.changeAnimation("LEFTSTAND",LeftStand);
   }
   if(keyWentDown(32)){
      player.changeAnimation("ATTACK",playerattack);
      HitSound.play();
     // skeleton1.changeAnimation("HURT",skeletonhurt);
   }
   if(keyWentDown(32)  && player.x < skeleton1.x && player.x > 600 && player.y > 80 && player.y < 400 ){
     skeleton1.changeAnimation("HURT",skeletonhurt);
     health.width -= 10 ;
   }
   if(health.width===0){
     skeleton1.destroy();
     health.destroy();
   }
 // else{
    // skeleton1.changeAnimation("ENEMY",skeleton1img);
  // }
 // if(player.x-5 < skeleton1.x && player.x > 600 && player.y > 80 && player.y < 400 ){
  //skeleton1.velocityX = player.velocityX;
  //skeleton1.velocityY = player.velocityY;
  //}
 //  if(player.y<100){
//   background("NEW",groundimg);
  // }
   
   //text.shapecolor("yellow");

   


   //if(keyIsDown(RIGHT_ARROW)){
   // player.x -= 2
    //player.changeImage =("ATTACK"){
    //player.changeAnimation("ATTACK",playerattack);
    //};
    //}
    background(backgroundimg);
    fill("orange");
    textStyle(BOLD);
    textSize(22);
    text("HELLO , This is practise mode , USE SPACEBAR TO ATTACK AND USE ARROW KEYS TO RUN",300,300);
    text("NOW GO TO THE SKELETON AND KILL HIM ",300,350);
    text("AFTER YOU HAVE KILLED THE SKELETON GO TO THE TOP OF THE MAP FOR THE REAL MATCH ",300,400);
    
    ////image(backgroundimg,0,-displayHeight*1,displayWidth,displayHeight*1)
    drawSprites();
    
    //console.log(player.x);
    //console.log(player.y);

    //player.bounceOff = function(skeleton1)


  

   //if(player.x === 500 && player.y === 500  ){
   // background(groundimg);
   //}

}   
  }
