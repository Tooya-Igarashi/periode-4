import { Actor, Color, Rectangle, Vector } from "excalibur";
import { Resources } from "./resources";

export class Coin extends Actor{
    constructor(){
        super({width: 25, height: 25})
            // this.graphics.use(new Rectangle({
            //     width: 25,
            //     height: 25,
            //     color: Color.Yellow
            // }));
            const coin = Resources.Coin.toSprite();
            coin.scale = new Vector(0.25, 0.25);
            this.graphics.use(coin)
    }
}