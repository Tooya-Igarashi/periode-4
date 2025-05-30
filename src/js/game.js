import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Color, SolverStrategy, Axis, Graphic } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Platform } from './platform.js'
import { UI } from './ui.js'
import { Coin } from './coin.js'
import { Enemy } from './enemy.js'
import { Finish } from './finish.js'
import { Obstacle } from './obstacle.js'
import { SmallObstacle } from './smallObstacle.js'
import { SuperCoin } from './superCoin.js'

const options = {
    width: 800, height: 600, 
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
    }
    startGame() {
        //player
        const player = new Player;
        player.pos = new Vector(400, 0);
        this.add(player)

        //obstacles
        const smallObstacle = new SmallObstacle;
        smallObstacle.pos = new Vector(1000, 550)
        this.add(smallObstacle)

        const smallObstacle2 = new SmallObstacle;
        smallObstacle2.pos = new Vector(1300, 500)
        this.add(smallObstacle2)

        //platforms
        const platform = new Platform;
        platform.pos = new Vector(100, 560);
        this.add(platform)

        const platform1 = new Platform;
        platform1.pos = new Vector(3000, 400);
        this.add(platform1)

        const platform2 = new Platform;
        platform2.pos = new Vector(5500, 560);
        this.add(platform2)

        //big obstacles
        const obstacle = new Obstacle;
        obstacle.pos = new Vector(-900, 400)
        this.add(obstacle)

        const obstacle2 = new Obstacle;
        obstacle2.pos = new Vector(1700, 580)
        this.add(obstacle2)

        const obstacle3 = new Obstacle;
        obstacle3.pos = new Vector(2000, 500)
        this.add(obstacle3)

        //ui
        this.ui = new UI();
        this.add(this.ui)

        //coins
        const coin = new Coin;
        coin.pos = new Vector(-200, 450)
        this.add(coin)

        const coin2 = new Coin;
        coin2.pos = new Vector(1480, 300)
        this.add(coin2)

        //line of coins
        for (let i = 0; i < 10; i++) {
            const coin = new Coin();
            coin.pos = new Vector(3000 + i * 50, 200);
            this.add(coin);
        }

        //superCoin
        const superCoin = new SuperCoin
        superCoin.pos = new Vector(4480, 280)
        this.add(superCoin)

        //enemies
        const enemy = new Enemy(100, 700);
        this.add(enemy)

        const enemy2 = new Enemy(3000, 4000);
        enemy2.pos = new Vector(4000,0)
        this.add(enemy2)

        const enemy3 = new Enemy(3000, 4000);
        enemy3.pos = new Vector(4000,0)
        this.add(enemy3)

        //finish
        const finish = new Finish;
        finish.pos = new Vector(6500, 450)
        this.add(finish)

    this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X);
    }
}

new Game()

