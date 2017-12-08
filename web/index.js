
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
        numFrames: 2
    },
    framerate: 24,
    animations: {stand: [0], ouade: [1, "stand"]},
    images: ["./img/Sprites-y-mia/y-mia-normal(b).gif","./img/Sprites-y-mia/y-mia-objection.gif"]
});
    
var sprite = new createjs.Sprite(ss, "stand");
sprite.scaleY = sprite.scaleX = 1.5;
stage.addChild(sprite);
    
sprite.on("click", function() { alert("toto");sprite.gotoAndPlay("ouade"); });

    
createjs.Ticker.on("tick", stage);


// var shape = new createjs.Shape();
// var x = 0;
// var y = 0;


// var bInc = true;
// setInterval(function(){

//     if (bInc) {
//         x++;//y++;
//     }
//     else {
//         x--;//y--;
//     }
//     shape.graphics.clear();
//     stage.update();
//     shape.graphics.beginFill('red').drawCircle(50+x,50+y,50);
//     shape.graphics.beginFill('red').drawCircle(50+x,100+y,50);
//     shape.graphics.beginFill('red').drawRect(40+x,50+y,200,50);
//     shape.graphics.beginFill('red').drawCircle(250+x,75+y,30);
//     stage.addChild(shape);
//     stage.update();

//     if (x == 100) {
//         bInc = false;
//     } else if (x == 0) {
//         bInc = true;
//     }
// },5)
