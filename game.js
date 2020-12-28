class game{
constructor(){

}
getState(){
    var gameRef = database.ref('gameState')
    gameRef.on("value",function(data){
        gameState = data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState ==0){
        player1 = new player()
        var playerCountRef = await database.ref('playerCount').once("value")
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val()
            player1.getcount()
        }
        form1 = new form()
        form1.display()
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)
    cars = [car1,car2,car3,car4]
}
play(){
    form1.hide()
    textSize(30)
    text("Game Start",120,100)
    player.getPlayerInfo()
    if(allPlayers!=undefined){
        var index = 0
        var x = 0
        var y
        for(var plr in allPlayers){
            index = index+1
            x = x+200
            y = displayHeight-allPlayers[plr].distance
            cars[index-1].x = x
            cars[index-1].y = y
            if(index == player1.index){
                cars[index-1].shapeColor = "red"
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }
            
        }
    }
    if(keyIsDown(UP_ARROW)&&player1.index!=null){
        player1.distance+= 10
        player1.update()
    }
    drawSprites()
}
}