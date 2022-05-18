export default class Brick {
    constructor(game, position) {
        this.imageBrick = document.getElementById('img_brick');

        this.game = game;

        this.position = position;

        this.width = 50;
        this.height = 25;
    }
    
    update() {

    }

    draw(ctx) {
        ctx.drawImage (
            this.imageBrick,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

    }
}