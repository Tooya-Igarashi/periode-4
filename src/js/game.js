import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Color, SolverStrategy, Axis } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Platform } from './platform.js'
import { UI } from './ui.js'
import { Coin } from './coin.js'

const options = { 
    width: 800, height: 600, 
    backgroundColor: Color.White,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 800),
    }
}

export class Game extends Engine {
    ui
    constructor() {
        super(options)
        this.start(ResourceLoader).then(() => this.startGame())
        this.showDebug(true)  // hitboxen testen
    }
    startGame() {
        const player = new Player;
        player.pos = new Vector(400, 0);
        this.add(player)

        const platform = new Platform;
        platform.pos = new Vector(400, 550);
        this.add(platform)

        this.ui = new UI
        this.add(this.ui)

        const coin = new Coin;
        coin.pos = new Vector(100, 450)
        this.add(coin)

    this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X);
    }
}

new Game()

//to do tomorrow: make ui.js and input lives and point system with coins. Also start with enemies, you cunt