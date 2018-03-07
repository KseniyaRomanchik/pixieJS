import * as PIXI from 'pixi.js'
import catImage from './images/cats'

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
  
  let catTexture = PIXI.utils.TextureCache[catImage];
  let catSprite = new PIXI.Sprite(catTexture)
  
  document.body.appendChild(app.view);
  
  app.stage.addChild(catSprite);
}

PIXI.loader
  .add(catImage)
  .load(init);


