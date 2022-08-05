class Food {
    constructor(size){
        this.size = SQUARE_SIZE;
        this.setRandomPosiotion();
    }
    setRandomPosiotion(){

        this.x = Math.round(Math.random() * GAME_SIZE % (GAME_SIZE / this.size -1));
        this.y = Math.round(Math.random() * GAME_SIZE % (GAME_SIZE / this.size -1));
    }

    draw (){
        ctx.fillStyle='yellow';
        ctx.fillRect(this.x * this.size, this.y * this.size,this.size, this.size);
    }
}