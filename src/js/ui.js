import { Actor, Color, Font, Label, Vector } from "excalibur";

export class UI extends Actor{
    label
    onInitialize(engine){
        this.label = new Label({
            text: 'Score 0',
            pos: new Vector(100, 40),
            font: new Font({
            size: 20,
            family: 'Open Sans',
            color: Color.Red
            })
        });
        this.addChild(this.label)
        this.label.screen = true;
    }
        updateScore(score) {
        this.label.text = `Score: ${score}`
    }
}