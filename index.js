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

  catSprite.x = 50
  catSprite.y = 50

  catSprite.scale.x = 0.7
  catSprite.scale.y = 0.7

  let rectangle = new PIXI.Rectangle(0, 70, window.innerWidth, window.innerHeight);
  
  document.body.appendChild(app.view);
  
  app.stage.addChild(catSprite);
}

PIXI.loader
  .add('mainCatTexture', catsImage)
  .add('catTexture', catImage)
  .add('mainMeowSound', meowSound)
  .load(init);


