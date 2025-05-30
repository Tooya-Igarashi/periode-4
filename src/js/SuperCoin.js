import { Color, Vector } from "excalibur";
import { Coin } from "./coin.js";
import { Resources } from "./resources.js";

export class SuperCoin extends Coin {
    constructor() {
        super();
        const superSprite = Resources.Coin.toSprite()
        superSprite.scale = new Vector(0.35, 0.35);
        superSprite.tint = Color.Red
        this.graphics.use(superSprite);
    }
}