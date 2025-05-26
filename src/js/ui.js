import { Actor, Circle, Color, Font, Label, None, Vector } from "excalibur";
import { Resources } from "./resources";

export class UI extends Actor{
    label
    lives = []
    player

    constructor(player){
        super()
        this.player = player
    }

onInitialize(engine) {
        this.label = new Label({
            text: 'Score 0',
            pos: new Vector(-500, 40),
            font: new Font({
                size: 20,
                family: 'Open Sans',
                color: Color.Red
            })
        });
        this.addChild(this.label);

            for (let i = 0; i < 3; i++) {
            const life = new Actor({
                pos: new Vector(700 + i * 35, 50), // space them out horizontally
                radius: 15,
                anchor: new Vector(0.5, 0.5)
            });
            const sprite = Resources.Heart.toSprite()
            sprite.scale = new Vector(0.25, 0.2)
            life.graphics.use(sprite)
            this.addChild(life);
            this.lives.push(life);
        }
}

onPreUpdate(engine) {
    if(this.player){
        this.label.pos = this.player.pos.add(new Vector(-390, -350))

        for (let i = 0; i < this.lives.length; i++) {
            this.lives[i].pos = this.player.pos.add(new Vector(300 + i * 35, -350))
        }
    }
}
showHealth(livesLeft) {
    for (let i = 0; i < this.lives.length; i++) {
            const sprite = Resources.Heart.toSprite()
            sprite.scale = new Vector(0.25, 0.2)
        if (i < livesLeft) {
            this.lives[i].graphics.use(sprite);
        } else {
            this.lives[i].graphics.use(sprite.tint = Color.Gray);
        }
    }
}

        updateScore(score) {
        this.label.text = `Score: ${score}`
    }
}