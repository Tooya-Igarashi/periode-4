import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Fish2: new ImageSource('images/fish2.png'),
    Shark: new ImageSource('images/shark.png'),
    Heart: new ImageSource('images/heart.png'),
    Floor: new ImageSource('images/ground.png'),
    Idle: new ImageSource('images/Idle.png'),
    Run: new ImageSource('images/Run.png'),
    Jump: new ImageSource('images/Jump.png'),
    Enemy: new ImageSource('images/mort.png'),
    Coin: new ImageSource('images/coin.png'),
    Background: new ImageSource('images/Background.png'),
    Vending: new ImageSource('images/VendingMachine_Moss.png'),
    ObstacleMap: new ImageSource('images/Map_Moss.png'),
    Goal: new ImageSource('images/house.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }