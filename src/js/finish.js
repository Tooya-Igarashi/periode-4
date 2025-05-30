import { Actor, CollisionType, Color } from "excalibur";
import { Resources } from "./resources";

export class Finish extends Actor{
    constructor(){
        const goal = Resources.Goal
        super({
            width: goal.width,
            height: goal.height,
            collisionType: CollisionType.Fixed
        });
        this.graphics.use(goal.toSprite())
    }
}