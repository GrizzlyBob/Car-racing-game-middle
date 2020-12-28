var gameState = 0
var playerCount
var form1,player1,game1
var database
var allPlayers
var distance = 0
var car1,car2,car3,car4,cars

function setup(){
    database = firebase.database()
    createCanvas(displayWidth-20,displayHeight-30);
    game1 = new game()
    game1.getState()
    game1.start()
}

function draw(){
    background("white");
    if(playerCount == 4){
        game1.update(1)
    }
    if(gameState == 1){
        clear()
        game1.play()
    }
    drawSprites();
}

