class Paddle {
    constructor(side) {
        this.width = 18;
        this.height = 180;
        this.x = side === 'left' ? 150 : canvas.width - 150;
        this.y = (canvas.height / 2) - 35;
        this.score = 0;
        this.move = DIRECTION.IDLE;
        this.speed = 8;
    }
}
