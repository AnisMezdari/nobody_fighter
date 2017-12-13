var canvas = document.getElementById("nobody_fight");
var ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 680;

document.body.appendChild(canvas);

var heroImage = new Image();
heroImage.src = 'img/onepuchMan/1-persoGaucheInitiale.png';

var heroImage2 = new Image();
heroImage2.src = 'img/onepuchMan/7-persoDroiteInitiale.png';

var hero = {
	speed: 400, // movement in pixels per second
	x: 0,
	y: 0
};

var hero2 = {
	speed: 400, // movement in pixels per second
	x: 800,
	y: 300
};
var keysDown = {};

var estAttcker = false;

  addEventListener("keydown", function (e) {

    if(40 == e.keyCode){
        estAttcker = true;
    }
    keysDown[e.keyCode] = true;

  }, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


var reset = function () {
	hero.x = 100;
	hero.y = 300;
};



var i = 0;
// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		// hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		// hero.y += hero.speed * modifier;
    // var now  = Date.now();
      attack();
      i++;

    estAttcker = false;
	}
  // Gauche
	if (37 in keysDown) { // Player holding left
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage.src = 'img/onepuchMan/6-persoGaucheRecule1.png';
		hero.x -= hero.speed * modifier;
	}
  // Droite
	if (39 in keysDown) { // Player holding right
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage.src = 'img/onepuchMan/2-persoGaucheAvance1.png';
    // animationAvance();
		hero.x += hero.speed * modifier;
	}

  if(!(37 in keysDown) && !(39 in keysDown)){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage.src = 'img/onepuchMan/1-persoGaucheInitiale.png';
  }
  // Q
  if(81 in keysDown) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage2.src = 'img/onepuchMan/8-persoDroiteAvance1.png';
    hero2.x -= hero2.speed * modifier;
  }
  // D
  if(68 in keysDown) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage2.src = 'img/onepuchMan/12-persoDroiteRecule1.png';
    hero2.x += hero2.speed * modifier;
  }


  if(!(68 in keysDown) && !(81 in keysDown)){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    heroImage2.src = 'img/onepuchMan/7-persoDroiteInitiale.png';
  }
  collision(heroImage,heroImage2, hero,hero2);

};


var render = function () {
	ctx.drawImage(heroImage, hero.x, hero.y);
 ctx.drawImage(heroImage2, hero2.x, hero2.y);
};


var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};


var then = Date.now();
reset();
main();


function animationAvance(){

  heroImage.src = "img/onepuchMan/2-persoGaucheAvance1.png";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  // perso.style = "width : 120px;";
  setTimeout(function(){
    heroImage.src = "img/onepuchMan/3-persoGaucheAvance2.png";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // perso.style = "width : 120px;";
    setTimeout(function(){
      heroImage.src = "img/onepuchMan/4-persoGaucheAvance3.png";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      setTimeout(function(){
        heroImage.src = "img/onepuchMan/5-persoGaucheAvance4.png";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        setTimeout(function(){
          heroImage.src = "img/onepuchMan/2-persoGaucheAvance1.png";
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        },100);
      },100);
    },70);
  },70);
}


function collision(perso1,perso2,hero1,hero2){
  var object1 = perso1;
  var object2 = perso2;

  if( hero1.x < hero2.x + object2.width  && hero1.x + object1.width  > hero2.x &&
		hero1.y < hero2.y + object2.height && hero2.y + object1.height > hero2.y){
      console.log("onestla");
    }
}

function attack(){
    estAttcker = true;
    // var now = Date.now();

    // if((now - momentDuClick) > 50000 ||  i == 0){
      heroImage.src = "image/attaqueIop/iop1.png";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      // perso.style = "width : 120px;";
      setTimeout(function(){
        heroImage.src = "image/attaqueIop/iop2.png";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // perso.style = "width : 120px;";
        setTimeout(function(){
          heroImage.src = "image/attaqueIop/iop3.png";
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          // perso.style = "width : 120px;";
          setTimeout(function(){
            heroImage.src = "image/attaqueIop/iop4.png";
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // perso.style = "width : 120px;";
            setTimeout(function(){
              heroImage.src = "image/attaqueIop/iop5.png";
              ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
              // perso.style = "width : 120px;";
              setTimeout(function(){
                heroImage.src = "image/attaqueIop/iop6.png";
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                // perso.style = "width : 120px;";
                setTimeout(function(){
                  heroImage.src = "image/attaqueIop/iop7.png";
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  setTimeout(function(){
                    heroImage.src = "image/attaqueIop/iop0.png";
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    // perso.style = "width : 120px;";
                  },200);
                  // perso.style = "width : 120px;";
                },85);
              },80);
            },80);
          },70);
        },60);
      },50);
    // }
  }
