import { Actor, CollisionType, Color, Engine, Keys, Rectangle, SpriteSheet, Vector, Animation, range } from "excalibur";
import { Platform } from "./platform";
import { Coin } from "./coin";
import { Enemy } from "./enemy";
import { Resources } from "./resources";

export class Player extends Actor {

    speed = 400;
    jump = false;
    score = 0;
    hitpoints = 3;

    constructor() {
        super({ width: 50, height: 50, collisionType: CollisionType.Active });

        //     this.graphics.use(new Rectangle({
        //     width: 50,
        //     height: 70,
        //     color: Color.Green, 
        // }));

        const runSheetIdle = SpriteSheet.fromImageSource({
            image: Resources.Idle,
            grid: {rows: 1, columns: 2, spriteWidth: 50, spriteHeight: 50}
        })

        const runSheetJump = SpriteSheet.fromImageSource({
            image: Resources.Jump,
            grid: {rows: 1, columns: 11, spriteWidth: 51.19, spriteHeight: 51}
        })

        const runSheetRun = SpriteSheet.fromImageSource({
            image: Resources.Run,
            grid: {rows: 1, columns: 4, spriteWidth: 51, spriteHeight: 51}
        })

        const idle = Animation.fromSpriteSheet(runSheetIdle, range (0, 1), 100)
        const jump = Animation.fromSpriteSheet(runSheetJump, range (1, 10), 100)
        const runRight = Animation.fromSpriteSheet(runSheetRun, range (1, 3), 100)
        const runLeft = runRight.clone()
        runLeft.flipHorizontal = true;

        this.graphics.add("idle", idle);
        this.graphics.add("jump", jump);
        this.graphics.add("runRight", runRight);
        this.graphics.add("runLeft", runLeft);

        this.graphics.use("idle")
    }
    
    onInitialize() {
        this.on("collisionstart", (event) => this.handleCollision(event));

        this.body.rotation.toFixed()
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = this.vel.y; 

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -this.speed;

            this.graphics.use("runLeft")

        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = this.speed;
            this.graphics.use("runRight")

        }

        if (engine.input.keyboard.wasPressed(Keys.Space) && this.jump === true) {
            yspeed = -400; 
            this.jump = false;
            this.graphics.use("jump")

            console.log('hello')
        }

        this.vel = new Vector(xspeed, yspeed);

        //pervent rotational force so it doesn't spin like crazy, with rectangle atleast idk what you do next
        this.rotation = 0;
        this.angularVelocity = 0;
        this.torque = 0;

        //resets player if it falls out of bounds
        if (this.pos.y > 700){
            this.outOfBounds()
        }
    }

    handleCollision(event) {

        if (event.other.owner instanceof Platform) {
            this.jump = true;
        }

        if (event.other.owner instanceof Coin){
            event.other.owner.kill();

            this.score++
            // @ts-ignore
            this.scene.engine.ui.updateScore(this.score)
        }

        if (event.other.owner instanceof Enemy) {
            console.log('hi')
            if(event.side === 'bottom'){
                event.other.owner.kill();
            } else{
                this.reduceHealth();
            }
        }
    }
    outOfBounds() {
            this.pos = new Vector(400, 0);
            this.vel = Vector.Zero;
            this.reduceHealth()
    }
    reduceHealth() {
    this.hitpoints--
    console.log('hello')
    // @ts-ignore
    this.scene.engine.ui.showHealth(this.hitpoints)
}
}

