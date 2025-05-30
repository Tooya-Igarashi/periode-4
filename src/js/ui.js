import { Actor, Circle, Color, Font, Label, None, ScreenElement, Vector } from "excalibur";
import { Resources } from "./resources";

export class UI extends ScreenElement{
    #label
    lives = []
    highscoreLabel


onInitialize(engine) {
        this.#label = new Label({
            text: 'Score 0',
            pos: new Vector(50, 40),
            font: new Font({
                size: 20,
                family: 'Open Sans',
                color: Color.White
            })
        });
        this.addChild(this.#label);

            for (let i = 0; i < 3; i++) {
            const life = new Actor({
                pos: new Vector(700 + i * 35, 50),
                radius: 15,
                anchor: new Vector(0.5, 0.5)
            });
            const sprite = Resources.Heart.toSprite()
            sprite.scale = new Vector(0.25, 0.2)
            life.graphics.use(sprite)
            this.addChild(life);
            this.lives.push(life);
        }

        this.highscoreLabel = new Label({
        text: "Highscore: 0",
        pos: new Vector(50, 70),
        font: new Font({
            size: 20,
            family: 'Open Sans',
            color: Color.Yellow
        })
    });
    this.addChild(this.highscoreLabel);

    this.updateHighscore();
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

showVictoryMessage(){
this.victory = new Label({
    text: 'Victory',
    pos: new Vector(350, 250),
    font: new Font({
        size: 40,
        family: 'Open Sans',
        color: Color.White
    })
});
this.addChild(this.victory);
}

GameOverMessage(){
this.gameOver = new Label({
    text: 'Game Over',
    pos: new Vector(350, 250),
    font: new Font({
        size: 40,
        family: 'Open Sans',
        color: Color.Red
    })})
    this.addChild(this.gameOver);}

        updateScore(score) {
        this.#label.text = `Score: ${score}`
    }

    updateHighscore() {
        let high = 0;
    if (localStorage.getItem('highscore') !== null) {
        high = Number(localStorage.getItem('highscore'));
    }
    this.highscoreLabel.text = `Highscore: ${high}`;
}
}