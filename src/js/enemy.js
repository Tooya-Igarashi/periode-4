import { Actor, CollisionType, Color, Rectangle, SpriteSheet, Vector, Animation, range  } from "excalibur";
import { Player } from "./player.js";
import { Resources } from "./resources.js";

export class Enemy extends Actor {
    speed = 100;
    direction = 1; // 1 for right, -1 for left

    constructor() {
        super({ width: 50, height: 50, collisionType: CollisionType.Active });
        // this.graphics.use(new Rectangle({
        //     width: 50,
        //     height: 50,
        //     color: Color.Red
        // }));

            const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Enemy,
            grid: {rows: 1, columns: 24, spriteWidth: 24, spriteHeight: 24}
        })
            const walkRight = Animation.fromSpriteSheet(runSheet, range (4, 9), 100)
            const walkLeft = walkRight.clone()
            walkLeft.flipHorizontal = true


            this.graphics.add("walkRight", walkRight)
            this.graphics.add("walkLeft", walkLeft)
        
        }
    onPreUpdate(engine, delta) {
        this.vel = new Vector(this.speed * this.direction, this.vel.y);

        // walling path of enemy, need to adjust later on
        if (this.pos.x < 100) this.direction = 1, this.graphics.use("walkRight");
        if (this.pos.x > 700) this.direction = -1, this.graphics.use("walkLeft");

        this.rotation = 0;
        this.angularVelocity = 0;
        this.torque = 0;
    }}