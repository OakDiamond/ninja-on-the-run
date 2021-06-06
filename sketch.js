var ground,boy,enemy,power,boy_running,boy_jumping,PLAY = 1,END = 0,powerUpImg1,powerUpImg2,powerUpImg3,powerUp1,powerUp2,powerUp3

function preload() {
  boy_running = loadAnimation("Run__000.png","Run__001.png","Run__004.png","Run__006.png","Run__007.png","Run__009.png");
  boy_jumping = loadAnimation("Jump__000.png","Jump__001.png","Jump__002.png","Jump__003.png","Jump__004.png","Jump__005.png","Jump__006.png","Jump__007.png","Jump__008.png","Jump__009.png");
 powerUpImg1 = loadAnimation("blue1.png","blue2.png","blue3.png","blue4.png","blue5.png","blue6.png");
 powerUpImg2 = loadAnimation("frame 1.png","frame 2.png","frame 3.png","frame 4.png","frame 5.png","frame 6.png");
 powerUpImg3 = loadAnimation("red1.png","red2.png","red3.png","red4.png","red5.png","red6.png");
}

function setup() {

  createCanvas(600,200);
 ground =  createSprite(600, 200, 1200, 20);
 enemy = createSprite()
 ground.velocityX = -4
 ground.x = ground.width/2
 enemyGroup = new Group()
         boy = createSprite(100,180,30,30)
  
   boy.addAnimation("running", boy_running);
   boy.scale = 0.2
   powerUp1.addAnimation("spinning",powerUpImg1);
   powerUp2.addAnimation("spinning",powerUpImg2);
   powerUp3.addAnimation("spinning",powerUpImg3)
   
}

function draw(){

  background("black");
  console.log(boy.y)
  if (ground.x < 0){
    ground.x = ground.width/2;
 
  }
  if(keyDown("space") && boy.y >= 144) {
   boy.addAnimation("jumping",boy_jumping);
   boy.scale = 0.2
    boy.velocityY = -10;
  }
  boy.velocityY = boy.velocityY + 0.6
 boy.collide(ground)
 if (boy.isTouching(ground)){
boy.changeAnimation("running",boy_running)
 }
power1()
power2()
power3()
  drawSprites();
  
 
}
function spawnEnemies() {
  if(frameCount % 60 === 0) {
    var enemy = createSprite(600,165,10,40);
    //obstacle.debug = true;
    enemy.velocityX = -(6 + 3*score/100);
    
    //generate random enemy
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: enemy.addImage(enemy1);
              break;
      case 2: enemy.addImage(enemy2);
              break;
      case 3: enemy.addImage(enemy3);
              break;
      case 4: enemy.addImage(enemy4);
              break;
      case 5: enemy.addImage(enemy5);
              break;
      case 6: enemy.addImage(enemy6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    //enemy.scale = 0.5;
    enemy.lifetime = 300;
    //add each obstacle to the group
enemyGroup.add(enemy);
  }
}
function power1() {
  if(frameCount % 500 === 0){
    powerUp1  = createSprite(580,180,30,20)
    powerUp1.velocityX = -4
}
}
function power2() {
  if(frameCount % 800 === 0){
powerUp2 = createSprite(580,180,80,70)
powerUp2.velocityX = -4
}
}
function power3() {
  if(frameCount % 1000 === 0){
powerUp3 = createSprite(580,180,50,110)
powerUp3.velocityX = -4
}
}



