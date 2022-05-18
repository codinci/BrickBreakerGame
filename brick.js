import { detectCollision } from "./collisionDetection.js";

export default class Brick {
    constructor(game, position) {
        this.imageBrick = document.getElementById('img_brick');

        this.game = game;

        this.position = position;

        this.width = 80;
        this.height = 25;

        this.markedForDeletion = false;
    }
    
    update() {
        if(detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y =- this.game.ball.speed.y;
            
            this.markedForDeletion = true;
        }

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