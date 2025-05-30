import { Actor, CollisionType } from "excalibur";
import { Resources } from "./resources";

export class Obstacle extends Actor{
    constructor(){
        const obstacle = Resources.Vending
        super({ width: obstacle.width, height: obstacle.height, collisionType: CollisionType.Fixed})
        this.graphics.use(obstacle.toSprite());
    }
}