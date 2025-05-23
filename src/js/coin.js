import { Actor, Color, Rectangle } from "excalibur";

export class Coin extends Actor{
    constructor(){
        super({width: 25, height: 25})
            this.graphics.use(new Rectangle({
                width: 25,
                height: 25,
                color: Color.Yellow
            }));
    }
}