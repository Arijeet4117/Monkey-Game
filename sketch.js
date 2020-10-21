
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,kela;
var FoodGroup, obstacleGroup;
var score
var ground
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,37,39) ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  if(keyDown("SPACE")&&(monkey.y>314)){
    monkey.velocityY=-20
  }
 
  if (ground.x < 0) {
     ground.x = ground.width/2;   
      }
  
  monkey.velocityY = monkey.velocityY+1
  monkey.collide(ground);
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,300,30)

  badha();
  kela();
  drawSprites();
  
}

function kela() {
  if (frameCount % 80 === 0) {
    banana = createSprite(410,random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 90;
    
    foodGroup.add(banana)
  } 
}

function badha(){
  
  
  
  if(frameCount%300===0){
    obstacles=createSprite(410,330,85,59);
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.15;
    obstacles.velocityX=-5;
    obstacles.lifetime=80;
    obstacleGroup.add(obstacles);
  }
  
}


