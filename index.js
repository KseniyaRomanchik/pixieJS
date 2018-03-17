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

  function imageCover(imageWidth, imageHeight) {

    const heightScale = window.innerHeight / imageHeight
    const widthScale = window.innerWidth / imageWidth

    const scale = heightScale > widthScale ? heightScale : widthScale

    const heightAnchor = ((imageHeight * scale - window.innerHeight) / (imageHeight * scale)) / 2
    const widthAnchor = ((imageWidth * scale - window.innerWidth) / (imageWidth * scale)) / 2

    return {
      scale: {
        x: heightScale > widthScale ? heightScale : widthScale,
        y: heightScale > widthScale ? heightScale : widthScale,
      },
      anchor: {
        x: isFinite(widthAnchor) ? widthAnchor : 0,
        y: isFinite(heightAnchor) ? heightAnchor : 0
      }
    }
  }

  const spriteParams = imageCover(catSprite.width, catSprite.height)

  catSprite.scale.set(spriteParams.scale.x, spriteParams.scale.y)
  catSprite.anchor.set(spriteParams.anchor.x, spriteParams.anchor.y)

  let rectangle = new PIXI.Rectangle(0, 70, window.innerWidth, window.innerHeight);
  let circle = new PIXI.Circle({
    x: 50,
    y: 50,
    radius: 100
  })
  let catMessage = new Text("Meow!!!", new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    // stroke: '#ff3300',
    // strokeThickness: 4,
    // dropShadow: true,
    // dropShadowColor: "#000000",
    // dropShadowBlur: 4,
    // dropShadowAngle: Math.PI / 6,
    // dropShadowDistance: 6,
  }));
  
  document.body.appendChild(app.view)

  const container = new PIXI.Container()
  // container.addChild(circle)
  // container.addChild(catMessage)
  container.addChild(catSprite)
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
  .load(init);


