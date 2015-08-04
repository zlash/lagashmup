var LagaSHMUp;
(function (LagaSHMUp) {
    var stage;
    var currentScene;
    function setupLoader(loader) {
        loader.add('nave', 'img/nave.png');
    }
    LagaSHMUp.setupLoader = setupLoader;
    function mainLoop(t) {
        currentScene.update(t);
    }
    LagaSHMUp.mainLoop = mainLoop;
    function init(stage) {
        this.stage = stage;
        currentScene = new Scene();
        this.stage.addChild(currentScene.container);
    }
    LagaSHMUp.init = init;
})(LagaSHMUp || (LagaSHMUp = {}));
var Scene = (function () {
    function Scene() {
        this.container = new PIXI.Container();
    }
    Scene.prototype.update = function (t) {
    };
    return Scene;
})();
