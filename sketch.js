var bgImg, backgr;
var cat, mous;
var mouseImg1, catImg1, mouseImg2, catImg2;

function preload(){
 bgImg = loadImage ("garden.png");

 catImg1 = loadAnimation("tomOne.png");
 mouseImg1 = loadAnimation("jerryOne.png");
 catImg2 = loadAnimation("tomTwo.png", "tomThree.png")
 mouseImg2 = loadAnimation("jerryTwo.png", "jerryThree.png");
 catImg3 = loadAnimation("tomFour.png");
 mouseImg3 = loadAnimation("jerryFour.png");

}

function setup() {
 createCanvas(1000,800);

 backgr = createSprite(500,400,1,1);
 backgr.addImage(bgImg);
 backgr.scale = 1.3;

 cat = createSprite(800,700,30,15);
 cat.addAnimation("sitting", catImg1);
 cat.scale = 0.2;

 mous = createSprite(100,700,20,20);
 mous.addAnimation("normal", mouseImg1);
 mous.scale = 0.2;

console.log("cat.x" + cat.x + "-" + "mous.x" + mous.x + "-" + "cat.width" +  cat.width + "-" + "mous.width" + mous.width);



}

function draw() {
background("black");

//console.log()

if((cat.x - mous.x ) < ((cat.width - mous.width)/2)){
  cat.velocityX = 0;
  cat.addAnimation("feliz", catImg3);
  cat.changeAnimation("feliz", catImg3);
  mous.addAnimation("feliz", mouseImg3);
  mous.changeAnimation("feliz", mouseImg3);
  cat.x = 300;
  cat.scale = 0.2;
}

drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
mous.addAnimation("burlando",mouseImg2);
  mous.changeAnimation("burlando",mouseImg2);
mous.frameDelay = 25;

cat.velocityX = -5;
cat.addAnimation("gatocaminando", catImg2);
cat.changeAnimation("gatocaminando", catImg2);
cat.frameDelay = 25;

}
}