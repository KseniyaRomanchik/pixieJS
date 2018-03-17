import * as PIXI from 'pixi.js'
import catsImage from './images/cats'
import catImage from './images/cat'
import meowSound from './sounds/meow'

// let type = "WebGL"

// if(!PIXI.utils.isWebGLSupported()){
//   type = "canvas"
// }

// PIXI.utils.sayHello(type)

const init = () => {
  let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
    transparent: false,
    resolution: 1 
  });
  
  app.renderer.backgroundColor = 0x061639;
  app.renderer.autoResize = true;
  app.renderer.resize(window.innerWidth, window.innerHeight);
  
  let catsTexture = PIXI.utils.TextureCache['mainCatTexture'];
  let catTexture = PIXI.utils.TextureCache['catTexture'];
  let catSprite = new PIXI.Sprite(catsTexture)

  const colorMatr = new PIXI.filters.ColorMatrixFilter()

  catSprite.filters = [
    colorMatr,
    new PIXI.filters.BlurFilter(0.3)
  ]

  catSprite.x = 50
  catSprite.y = 50

  catSprite.scale.x = 0.7
  catSprite.scale.y = 0.7

  let rectangle = new PIXI.Rectangle(0, 70, window.innerWidth, window.innerHeight);
  let circle = new PIXI.Circle(550, 550, 35)
  let catMessage = new Text("Meow!!!", new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  }));

  console.log(circle)
  
  document.body.appendChild(app.view)

  const container = new PIXI.Container()
  container.addChild(circle, catMessage, catSprite)
  
  app.stage.addChild(container)
}

PIXI.loader
  .add([
    {
      name: 'mainCatTexture',
      url: catsImage,
      onComplete: (loader, resource) => null
    },
    {
      name: 'catTexture',
      url: catImage
    },
    {
      name: 'mainMeowSound',
      url: meowSound
    }
  ])
  .on("progress", (loader, resource) => console.log('loading', loader.progress))
  .load(init);


