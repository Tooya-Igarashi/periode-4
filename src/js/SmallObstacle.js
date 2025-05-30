import { Actor, CollisionType } from "excalibur";
import { Resources } from "./resources";
import { Obstacle } from "./obstacle";

export class SmallObstacle extends Actor{
    constructor(){
        const obstacle = Resources.ObstacleMap
        super({
            width: obstacle.width,
            height: obstacle.height,
            collisionType: CollisionType.Fixed
        });
        this.graphics.use(obstacle.toSprite());
    }
}