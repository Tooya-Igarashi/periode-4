import { Actor, CollisionType, Color, Engine, Keys, Rectangle, Vector } from "excalibur";
import { Platform } from "./platform";
import { Coin } from "./coin";
import { Enemy } from "./enemy";

export class Player extends Actor {

    speed = 400;
    jump = false;
    score = 0;
    hitpoints = 3;

    constructor() {
        super({ width: 50, height: 70, collisionType: CollisionType.Active });
        this.graphics.use(new Rectangle({
            width: 50,
            height: 70,
            color: Color.Green, 
        }));
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
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = this.speed;
        }

        if (engine.input.keyboard.wasPressed(Keys.Space) && this.jump === true) {
            yspeed = -400; 
            this.jump = false;
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
            this.reduceHealth();
    }
    reduceHealth() {
    this.hitpoints--
    console.log('hello')
    // @ts-ignore
    this.scene.engine.ui.showHealth(this.hitpoints)
}
}

