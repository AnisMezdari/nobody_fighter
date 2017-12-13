

var stage = new createjs.Stage('nobody_fight');

// MIA
var mia = new createjs.SpriteSheet({
    frames: {
        width: 256,
        height: 192,
        numFrames: 3
    },
    animations: {stand: [0], ouade1: [0,1, "ouade2"],ouade2: [1,2, "stand"]},
    images: [
        "./img/mia/y-mia-normal(b).gif",
        "./img/mia/y-mia-objection(1).gif",
        "./img/mia/y-mia-objection(2).gif"]
});

var spriteMia = new createjs.Sprite(mia, "stand");
spriteMia.scaleY = spriteMia.scaleX = 1.5;
stage.addChild(spriteMia);

createjs.Ticker.on("tick", stage);

$(window).keyup(
    function(e){
        switch(e.keyCode ) {
            case 83:
                spriteMia.gotoAndPlay("ouade1");
                break;
        }
})

$(window).keydown(
    function(e){
        switch(e.keyCode ) {
            case 81:
                spriteMia.x-=20;
                break;
            case 68:
                spriteMia.x+=20;
                break;
        }
})

// GODOT
var godot = new createjs.SpriteSheet({
    frames: {
        width: 256,
        height: 192,
        numFrames: 3
    },
    animations: {
        stand: [0],
        strike1: [0,1, "strike2"],
        strike2: [1,2, "strike3"],
        strike3: [2,3, "stand"]
    },
    images: [
        "./img/godot/godot-rest(1).gif",
        "./img/godot/godot-strike(1).gif",
        "./img/godot/godot-strike(2).gif",
        "./img/godot/godot-strike(3).gif"
    ]
})

var spriteGodot = new createjs.Sprite(godot, "stand");
spriteGodot.scaleY = spriteGodot.scaleX = 1.5;
spriteGodot.x = 800;
stage.addChild(spriteGodot);

createjs.Ticker.on("tick", stage);

$(window).keyup(
    function(e){
        switch(e.keyCode ) {
            case 13:
                spriteGodot.gotoAndPlay("strike1");
                break;
        }
})

$(window).keydown(
    function(e){
        switch(e.keyCode ) {
            case 37:
                spriteGodot.x-=20;
                break;
            case 39:
                spriteGodot.x+=20;
                break;
        }
})
