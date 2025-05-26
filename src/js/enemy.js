import { Actor, CollisionType, Color, Rectangle, Vector } from "excalibur";
import { Player } from "./player.js";

export class Enemy extends Actor {
    speed = 100;
    direction = 1; // 1 for right, -1 for left

    constructor() {
        super({ width: 50, height: 50, collisionType: CollisionType.Active });
        this.graphics.use(new Rectangle({
            width: 50,
            height: 50,
            color: Color.Red
        }));
        }
    onPreUpdate(engine, delta) {
        // Move left and right
        this.vel = new Vector(this.speed * this.direction, this.vel.y);

        // Simple direction change at screen edges (adjust as needed)
        if (this.pos.x < 100) this.direction = 1;
        if (this.pos.x > 700) this.direction = -1;

        this.rotation = 0;
        this.angularVelocity = 0;
        this.torque = 0;
    }}