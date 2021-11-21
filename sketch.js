var duck,duckimage
var bowman, bowmanimage
var bgimage

function preload(){
duckimage = loadAnimation("duck1.png","duck2.png","duck3.png","duck4.png","duck5.png", "duck6.png")
bowmanimage = loadAnimation("bowman1.png","bowmanimage2.png","bowman3.png","bowman4.png","bowman5.png","bowan6.png")
bgimage = loadImage("level1bg.jpg")
}

function setup(){
createCanvas (800,500)
duck = createSprite(60,400)
duck.addAnimation("duckmoving",duckimage)
bowman = createSprite(60,400)
bowman.addAnimation("bowmanmoving", bowmanimage)
duck.scale = 0.25
duck.velocityX = 1.5
bowman.scale = 0.25
bowman.velocityX = 1.5
}

function draw(){
  background(bgimage)
drawSprites()

}