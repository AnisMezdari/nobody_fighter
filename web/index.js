console.log("let's go");


var stage = new createjs.Stage('nobody_fight');
var shape = new createjs.Shape();
var x = 0;
var y = 0;


var bInc = true;
setInterval(function(){

    if (bInc) {
        x++;//y++;
    }
    else {
        x--;//y--;
    }
    shape.graphics.clear();
    stage.update();
    shape.graphics.beginFill('red').drawCircle(50+x,50+y,50);
    shape.graphics.beginFill('red').drawCircle(50+x,100+y,50);
    shape.graphics.beginFill('red').drawRect(40+x,50+y,200,50);
    shape.graphics.beginFill('red').drawCircle(250+x,75+y,30);
    stage.addChild(shape);
    stage.update();

    if (x == 100) {
        bInc = false;
    } else if (x == 0) {
        bInc = true;
    }
},5)
