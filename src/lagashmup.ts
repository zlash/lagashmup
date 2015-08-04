

module LagaSHMUp{

var stage:any;
var currentScene:Scene;

export function setupLoader(loader: any):void
{
  loader.add('nave', 'img/nave.png');
}

export function mainLoop(t: Number):void
{
  currentScene.update(t);
}

export function init(stage:any):void
{
  this.stage=stage;
  currentScene = new Scene();
  this.stage.addChild(currentScene.container);
}

}
