var dog, happyDog, database, foodS, foodStock, dogImage, MilkImg, dogImage2;
var fedtime, lastfed;
var feed, addfood;
var foodobject;
var gamestate,readstate;
var washroom,bedroom,garden;
var washroomimg,bedroomimg,gardenimg;
function preload(){
    MilkImg=loadImage("images/Milk.png");
    dogImage=loadImage("images/dog.png");
    dogImage2=loadImage("images/dog11.png");
    washroomimg=loadImage("Wash Room.png");
    bedroomimg=loadImage("Bed Room.png");
    gardenimg=loadImage("Garden.png");
}
function setup(){
    createCanvas(500,500);
    foodobject= new Food();
    database=firebase.database();
    dog=createSprite(200,200,10,10);
    dog.addImage(dogImage);
    foodStock=database.ref('Food');
    foodStock.on("value",readStock);
    feed=createButton('Feed The Dog');
    feed.position(700,95);
    feed.mousePressed(feeddog);
    addfood=createButton('Add The Food');
    addfood.position(750,95);
    addfood.mousePressed(addthefood)
}
function draw(){
    background(46,139,87);
    foodobject.display();
   
fill("white");
stroke("black")
textSize(20);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",200,50,);
fedtime=database.ref('feedtime');
fedtime.on("value",function(data){
    lastfed=data.val();
})
    drawSprites();
}
function readStock(data){
    foodS=data.val();
}
function writeStock(x){
    if(x<=0){
        x=0;
    }else{
        x=x+1;
    }
    database.ref('/').update({
        Food:x
    })
}
function addthefood(){
    foodS++;
    database.ref('/').update({
        food:foodS
    })
}
function feeddog(){
    dog.addImage(happyDog)
    foodobject.updatefoodstock(foodobject.getfoodstock()-1);
    database.ref('/').update({
        food:foodobject.getfoodstock();
     feedtime:hour();
    })
}