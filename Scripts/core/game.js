// IIFE - Immediately Invoked Function Expression 
(function () {
    var canvas;
    var stage;
    var assetManager;
    var assetManifest;
    // Game Objects
    var player;
    var background;
    assetManifest = [
        { id: "player", src: "./Assets/sprites/player/placeholder-player.png" },
        { id: "background", src: "./Assets/sprites/environment/placeholder-background.png" }
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetManagger = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        // Call Start after loaded all assets
        assetManager.on("complete", Start);
    }
    function Start() {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        player.Update();
        stage.update();
    }
    function Main() {
        player = new objects.Player();
        background = new createjs.Bitmap(assetManager.getResult("background"));
        stage.addChild(background);
        stage.addChild(player);
    }
    window.onload = Init;
}());
//# sourceMappingURL=game.js.map