import { Actor, CollisionType, Color, Graphic, Rectangle } from "excalibur";
import { Resources } from "./resources";

export class Platform extends Actor {
    constructor() {
        super({ width: Resources.Floor.width, height: 80, collisionType: CollisionType.Fixed })
        this.graphics.use(Resources.Floor.toSprite());
    }
}