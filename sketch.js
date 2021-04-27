//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,fruit ,monster,fruit2Group,monsterGroup, score,r,randomFruit, position,fruit1Group,fruit3Group,fruit4Group
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;
var gameoverSound,knifeswooshSound
var bomb1,bomb1Img
var bomb,bombImg
var fruit1Img, fruit2Img ,fruit3Img,fruit4Img
var red1,green1,orange1,yellow1
var red1Img,green1Img,orange1Img,yellow1Img
var Wall,WallImg

function preload(){
  
  knifeImage = loadImage("knife.png");
  monsterImage = loadImage("bomb.png")
  fruit1Img  = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img  = loadImage("fruit3.png");
  fruit4Img  = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  gameoverSound = loadSound("gameover.mp3")
  knifeswooshSound = loadSound("knifeSwoosh.mp3")
   bomb1Img = loadImage("bomb.png");
  bombImg = loadImage("Bomb1.png");
   red1Img  = loadImage("red-splatter.png");
  orange1Img = loadImage("orange-splash.png");
  green1Img  = loadImage("green-splash.png");
  yellow1Img  = loadImage("yellow-splash.png");
  WallImg=loadImage("Wall.PNG")
  //load sound here
}



function setup() {
  createCanvas(600, 600);
  
  Wall=createSprite(300,300,700,700);
  Wall.addImage(WallImg)
  Wall.scale=1.5
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
   bomb=createSprite(300,300,20,20);
   bomb.visible=false;
   bomb.scale=2
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  // Score variables and Groups
  score=0;
  fruit1Group=createGroup();
  fruit2Group=createGroup();
  fruit3Group=createGroup();
  fruit4Group=createGroup();
  monsterGroup=createGroup();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //Call fruits and Monster function
    Monster();
    
    // Move sword with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    
    
    var select_fruit = Math.round(random(1,4));
  console.log(select_fruit)
    if (World.frameCount % 120 == 0) {
    if (select_fruit == 1) {
      Fruit1();
    } else if (select_fruit == 2) {
     Fruit2();
    } else if (select_fruit == 3) {
     Fruit3();
    } else {if (select_fruit == 4) {
     Fruit4();
    }
}
}
  
    // Increase score if sword touching fruit
    if(fruit1Group.isTouching(knife)){
      Oranges1();
      fruit1Group.destroyEach();
    score=score+2
     knifeswooshSound.play(); 
    }
    if(fruit2Group.isTouching(knife)){
      Reds1();
      fruit2Group.destroyEach();
    score=score+2
     knifeswooshSound.play(); 
    }
    if(fruit3Group.isTouching(knife)){
      Greens1();
      fruit3Group.destroyEach();
    score=score+2
     knifeswooshSound.play(); 
    }
    if(fruit4Group.isTouching(knife)){
      Yellows1();
      fruit4Group.destroyEach();
    score=score+2
     knifeswooshSound.play(); 
    }
    else
    {
      // Go to end state if sword touching enemy
      if(monsterGroup.isTouching(knife)){
        gameState=END;
        
        bomb.addImage(bombImg);
        bomb.visible=true;
        
       gameoverSound.play();
        
        fruit1Group.destroyEach();
        fruit2Group.destroyEach();
        fruit3Group.destroyEach();
        fruit4Group.destroyEach();
        monsterGroup.destroyEach();
        
        fruit1Group.setVelocityXEach(0)
        fruit2Group.setVelocityXEach(0)
        fruit3Group.setVelocityXEach(0)
        fruit4Group.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);
        
        // Change the animation of sword to gameover and reset its position
        knife.addImage(gameOverImage);
        knife.scale=2;
        knife.x=300;
        knife.y=300;
      }
    }
  }
  
  drawSprites();
  //Display score
  fill("white")
  textSize(25);
  text("Score : "+ score,20,50);
  
  
}


function Monster(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.scale=0.7
    monster.addImage("moving", monsterImage);
    monster.y=Math.round(random(100,550));
    //update below give line of code for increase monsterGroup speed by 10
    monster.velocityX = -(7+10*score/10);
    monster.setLifetime=50;
    
    monsterGroup.add(monster);
  }
}

 function Fruit1(){
  if(World.frameCount%120===0){
    fruit1=createSprite(400,200,20,20);
    position = Math.round(random(1,2));
    if(position==1)
    {
    fruit1.x=600;
    //update below give line of code for increase fruitGroup speed by 4
    fruit1.velocityX=-(7+4*score/10)
    }
    else
    {
      if(position==2){
      fruit1.x=0;
      
     //update below give line of code for increase fruitGroup speed by 4
      fruit1.velocityX= (7+4*score/10);
      }
    }
    fruit1.scale=0.3
    fruit1.addImage( fruit1Img);
    fruit1.y=Math.round(random(100,550));
    fruit1.setLifetime=50;
    
    fruit1Group.add(fruit1);
  }
}
 function Fruit2(){
  if(World.frameCount%120===0){
    fruit2=createSprite(400,200,20,20);
    position = Math.round(random(1,2));
    if(position==1)
    {
    fruit2.x=600;
    //update below give line of code for increase fruitGroup speed by 4
    fruit2.velocityX=-(7+4*score/10)
    }
    else
    {
      if(position==2){
      fruit2.x=0;
      
     //update below give line of code for increase fruitGroup speed by 4
      fruit2.velocityX= (7+4*score/10);
      }
    }
    fruit2.scale=0.3
    fruit2.addImage( fruit2Img);
    fruit2.y=Math.round(random(100,550));
    fruit2.setLifetime=50;
    
    fruit2Group.add(fruit2);
  }
 }
function Fruit3(){
  if(World.frameCount%120===0){
    fruit3=createSprite(400,200,20,20);
    position = Math.round(random(1,2));
    if(position==1)
    {
    fruit3.x=600;
    //update below give line of code for increase fruitGroup speed by 4
    fruit3.velocityX=-(7+4*score/10)
    }
    else
    {
      if(position==2){
      fruit3.x=0;
      
     //update below give line of code for increase fruitGroup speed by 4
      fruit3.velocityX= (7+4*score/10);
      }
    }
    fruit3.scale=0.3
    fruit3.addImage( fruit3Img);
    fruit3.y=Math.round(random(100,550));
    fruit3.setLifetime=50;
    
    fruit3Group.add(fruit3);
  }
 }
function Fruit4(){
  if(World.frameCount%120===0){
    fruit4=createSprite(400,200,20,20);
    position = Math.round(random(1,2));
    if(position==1)
    {
    fruit4.x=600;
    //update below give line of code for increase fruitGroup speed by 4
    fruit4.velocityX=-(7+4*score/10)
    }
    else
    {
      if(position==2){
      fruit4.x=0;
      
     //update below give line of code for increase fruitGroup speed by 4
      fruit4.velocityX= (7+4*score/10);
      }
    }
    fruit4.scale=0.3
    fruit4.addImage( fruit4Img);
    fruit4.y=Math.round(random(100,550));
    fruit4.setLifetime=50;
    
    fruit4Group.add(fruit4);
  }
 }
function Reds1(){
var red0 = createSprite(400,200);
red0.y=Math.round(random(100,550));
red0.x=Math.round(random(100,550));
red0.addImage(red1Img)
red0.velocityX = 0;
red0.velocityY= 0;
red0.scale = 0.3
  knife.depth=red0.depth
knife.depth=knife.depth+1
}

function Yellows1(){
var yellow0 = createSprite(400,200);
yellow0.y=Math.round(random(100,550));
yellow0.x=Math.round(random(100,550));
yellow0.addImage(yellow1Img)
yellow0.velocityX = 0;
yellow0.velocityY= 0;
yellow0.scale = 0.8
  knife.depth=yellow0.depth
knife.depth=knife.depth+1
}
function Oranges1(){
var orange0 = createSprite(400,200);
orange0.y=Math.round(random(100,550));
orange0.x=Math.round(random(100,550));
orange0.addImage(orange1Img)
orange0.velocityX = 0;
orange0.velocityY= 0;
orange0.scale = 0.5
  knife.depth=orange0.depth
knife.depth=knife.depth+1
}

function Greens1(){
var green0 = createSprite(400,200);    
   green0.y=Math.round(random(100,550));
  green0.x=Math.round(random(100,550));
green0.addImage(green1Img)
green0.velocityX = 0;
green0.velocityY= 0;
green0.scale = 0.8
knife.depth=green0.depth
knife.depth=knife.depth+1
}