class form{
    constructor(){
this.input = createInput("name")
this.button = createButton('play')
this.greeting = createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player1.name = this.input.value()
            playerCount+=1
            player1.index = playerCount
            player1.update()
            player1.updateCount(playerCount)
            this.greeting.html("Hello"+player1.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}