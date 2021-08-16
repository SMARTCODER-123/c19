var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300,300,40,40)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.7

  climbersGroup = createGroup();
  doorsGroup = createGroup();

}

function draw() {

  if (gameState==="play"){
    if(tower.y > 400){
      tower.y = 300
    }
    spawnDoor();
    spawnClimber();
    if(doorsGroup.isTouching(ghost)){
      gameState = "end"
    }
   
    drawSprites();

  }
  
  else if (gameState === "end"){
    background("white");
    fill("black");
    textSize(25);
    text("GAME OVER...!!")
  }
  
 
    
}
function spawnDoor() {
  if (frameCount % 120 === 0) {
     door = createSprite(600,0,40,10);
    door.x = Math.round(random(80,400));
    door.addImage(doorImg);
    door.scale = 0.8;
    door.velocityY = 5;
    
    doorsGroup.add(door);
    
  }
}
function spawnClimber() {
  if (frameCount % 120 === 0) {
     climber = createSprite(600,50,40,10);
    climber.x = door.x
    climber.addImage(climberImg);
    climber.scale = 0.8;
    climber.velocityY = 5;

    climbersGroup.add(climber);
    
  }
}