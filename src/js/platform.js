import { Actor, CollisionType, Color, Rectangle } from "excalibur";

export class Platform extends Actor {
    constructor() {
        super({ width: 800, height: 100, collisionType: CollisionType.Fixed })
        this.graphics.use(new Rectangle({
            width: 800,
            height: 100,
            color: Color.Gray 
        }));
    }
}