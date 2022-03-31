var bg,bgImg;
var player, shipImg;
var enemy, enemyImg
var bullet;
var explosionSound;


var score = 0;

var gameState = 0
var gameState = 1

// var gameState = PLAY


function preload(){
  shipImg = loadImage("ship.png")

  enemyImg = loadImage("meteor2.png")

explosionSound = loadSound("explosion.mp3")

  bgImg = loadImage("bg.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2+170,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.3
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shipImg)
   player.scale = 0.2
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)




   bulletGroup = new Group()
   enemyGroup = new Group()

}

function draw() {
  background(0); 
//if(gameState == 0){



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}






//}

if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX = 20
  
  bulletGroup.add(bullet)
  player.depth = bullet.depth
  player.depth = player.depth+2
  explosionSound.play();
}

if(enemyGroup.isTouching(bulletGroup)){
  bulletGroup.destroyEach()
  explosionSound.play();
  enemy.destroy()

  score = score+2
  } 


  
enemySpawn()

drawSprites();

textSize(20);
stroke(3);
fill("white")
text("Score: "+ score, 50,750);

}


function enemySpawn(){
  if(frameCount%120 == 0){
    enemy = createSprite(random(1500,1500),random(100,500),40,40)
    enemy.addImage(enemyImg);
    enemy.scale = 0.4
    enemy.velocityX = -5
    enemy.lifeTime = 400

    enemy.debug = true

    enemyGroup.add(enemy)
  }
}




