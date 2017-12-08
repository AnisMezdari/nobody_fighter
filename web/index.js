
   var img1 = new Image();
   img1.crossOrigin="Anonymous";
   img1.src = "./img/Sprites-y-mia/y-mia-normal(b).gif";
   var img2 = new Image();
   img2.crossOrigin="Anonymous";
   img2.src = "./img/Sprites-y-mia/y-mia-objection.gif";

var stage = new createjs.Stage('nobody_fight');
var ss = new createjs.SpriteSheet({
    frames: {
        width: 256,
        height: 192,
        numFrames: 3
    },
    animations: {stand: [0], ouade1: [0,1, "ouade2"],ouade2: [1,2, "stand"]},
    images: ["./img/mia/y-mia-normal(b).gif","./img/mia/y-mia-objection(1).gif","./img/mia/y-mia-objection(2).gif"]
});
    
var sprite = new createjs.Sprite(ss, "stand");
sprite.scaleY = sprite.scaleX = 1.5;
stage.addChild(sprite);
   
createjs.Ticker.on("tick", stage);

$(window).keydown(
    function(e){
        if(e.keyCode == 13) {
            sprite.gotoAndPlay("ouade1");
        }
})
