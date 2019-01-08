(function() {
	$(document).ready(function() {
		var game = {};

		game.ctxBackground = $("#background")[0].getContext("2d");
		game.ctxPlayer = document.getElementById("player").getContext("2d");
		game.ctxEnemy = document.getElementById("enemies").getContext("2d");
		game.ctxUI = document.getElementById("ui").getContext("2d");

		game.width = document.getElementById("background").width;
		game.height = document.getElementById("background").height;

		game.images = [];
		game.doneImages = 0;
		game.requiredImages = 0;

		//Game States
		game.gameOver = false;
		game.gameWon = false;


		game.count = 0;
		game.division = 48;
		game.left = false;

		game.moving = false;

		game.fullShootTimer = 10;
		game.shootTimer = game.fullShootTimer;

		game.explodeSound = new Audio("./res/explosion.wav");
		game.shootSound = new Audio("./res/shoot.wav");

		game.player = {
			x: game.width/2 - 50,
			y: game.height - 110,
			width: 100,
			height: 100,
			vel: 10,
			img: null,
			rendered: false
		};
		
		game.enemies = [];
		game.bullets = [];
		game.stars = [];
		game.keys = [];


		$(document).keydown(function(e) {
			game.keys[e.keyCode ? e.keyCode : e.which] = true;

		});

		$(document).keyup(function(e) {
			delete game.keys[e.keyCode ? e.keyCode : e.which];
		});

		function addBullet() {
			game.bullets.push({
				width: 15,
				height: 40,
				img: 2,
				vel: 5,
				x: game.player.x + (game.player.width/2 - 15/2),
				y: game.player.y
			});
			game.shootSound.play();
		}


		function collision(first, second) {
			return !(first.x > second.x + second.width || 
				first.x + first.width < second.x || 
				first.y > second.y + second.height ||
				first.y + first.height < second.y);
		}

		function addStars(num) {
			for(i = 0; i < num; i++) {
				game.stars.push({
					x: Math.floor(Math.random() * game.width),
					y: game.height + 10,
					size: Math.random() * 5
				});
			}
		}
		
		function initImages(paths) {
			game.requiredImages = paths.length;
			for(i in paths) {
				var img = new Image();
				img.src = paths[i];
				game.images[i] = img;
				game.images[i].onload = function() {
					game.doneImages++;
				}
			}
		}

		function checkImages() {
			if(game.doneImages >= game.requiredImages) {
				init();
			}
			else {
				setTimeout(function() {
					checkImages();
				}, 50);
			}
		}

		function init() {
			for(i = 0; i < 600; i++) {
				game.stars.push({
					x: Math.floor(Math.random() * game.width),
					y: Math.floor(Math.random() * game.height),
					size: Math.random() * 5
				});
			}

			//initilize the player
			game.player.img = game.images[0];

			//initialise the enemies
			for(y = 0; y < 5; y++) {
				for(x = 0; x < 5; x++) {
					game.enemies.push({
						x: (x * 65) + 5,
						y: (y * 65)+ 30,
						width: 50,
						height: 50,
						img: 1,
						vel: 5,
						dead: false,
						deadTime: 15
					})
				}
			}

			loop();
			setTimeout(function() {
				game.moving = true;
			}, 1000);
		}

		function update() {
			game.count++;
			if (game.shootTimer > 0 ) game.shootTimer--;

			addStars(1);
			for(i in game.stars) {
				if(game.stars[i].y <= -10) {
					game.stars.splice(i, 1);
				}
				game.stars[i].y--;
			}

			/*
				38: up
				40: down
				37: left
				39: right 
				
				w: 87
				a: 65
				s: 83
				d: 68

				32: space
			*/

			// fire a missile
			if(game.keys[32] && game.shootTimer <= 0 && !game.gameOver) {
				addBullet();
				game.shootTimer = game.fullShootTimer;
			}
			if((game.keys[37] || game.keys[65]) && !game.gameOver) {
				if(game.player.x >= 0) {
					game.player.x -= game.player.vel;	
					game.player.rendered = false;
				} 
			}
			if((game.keys[39] || game.keys[68])  && !game.gameOver) {
				if(game.player.x <= game.width - game.player.width) {
					game.player.x += game.player.vel;
					game.player.rendered = false;
				}
			}

			if(game.count % game.division == 0) {
				game.count = 0;
				game.left = !game.left; 
			}

			for(i in game.enemies) {
				var enemy = game.enemies[i];
				if(!game.gameOver) {
					if(game.left) {
						enemy.x -= enemy.vel;
					}
					else {
						enemy.x += enemy.vel;
					}
					if(game.moving) {
						enemy.y++;
					}
					if(enemy.y >= game.height + 5) {
						game.gameOver = true;
					}
				}
			}

			for(b in game.bullets) {
				var bullet = game.bullets[b];
				if(bullet.y <= -bullet.height) {
					game.bullets.splice(b, 1);
				}
				else {
					bullet.y -= bullet.vel;
				}
			}

			for(e in game.enemies) {
				for(b in game.bullets) {
					if(collision(game.enemies[e], game.bullets[b])) {
						game.enemies[e].dead = true;
						game.enemies[e].img = 3;
						game.ctxEnemy.clearRect(game.bullets[b].x-1, game.bullets[b].y-1, game.bullets[b].width+2, game.bullets[b].height+game.bullets[b].vel+2);
						game.bullets.splice(b, 1);
						game.explodeSound.play();
					}
				}
			}

			for(e in game.enemies) {
				if(game.enemies[e].dead) {
					game.enemies[e].deadTime--;
				}
				if(game.enemies[e].dead && game.enemies[e].deadTime <= 0) {
					game.ctxEnemy.clearRect(game.enemies[e].x-5, game.enemies[e].y-5, game.enemies[e].width+10, game.enemies[e].height+10);
					game.enemies.splice(e, 1);
				}
			}

			if(game.enemies.length == 0) game.gameWon = true;

			if(game.gameWon) {
				game.player.y -= 20;
				game.player.rendered = false;
			}
		}

		function render() {
			game.ctxBackground.clearRect(0, 0, game.width, game.height);
			game.ctxUI.clearRect(0, game.height/2 - 100, game.width, 100);
			game.ctxBackground.fillStyle = "white";
			for(i in game.stars) {
				var star = game.stars[i];
				game.ctxBackground.fillRect(star.x, star.y, star.size, star.size);
			}

			//render player
			if(!game.player.rendered) {
				game.ctxPlayer.clearRect(game.player.x-game.player.vel, 
					game.player.y, 
					game.player.width+game.player.vel*2, 
					game.player.height+game.player.vel*2);
				game.ctxPlayer.drawImage(game.player.img, game.player.x, game.player.y, game.player.width, game.player.height);
				game.player.rendered = true;
			}

			//render enemies
			for(i in game.enemies) {
				var enemy = game.enemies[i];
				game.ctxEnemy.clearRect(enemy.x-enemy.vel, enemy.y-enemy.vel, 70, 70);
				game.ctxEnemy.drawImage(game.images[enemy.img], enemy.x, enemy.y, enemy.width, enemy.height);				
			}

			for(i in game.bullets) {
				var bullet = game.bullets[i];
				game.ctxEnemy.clearRect(bullet.x-1, bullet.y, bullet.width+2, bullet.height+bullet.vel);
				game.ctxEnemy.drawImage(game.images[bullet.img], bullet.x, bullet.y, bullet.width, bullet.height);		
			}

			if(game.gameOver) {
				game.ctxUI.font = "bold 60px monaco";
				game.ctxUI.fillStyle = "red";
				game.ctxUI.fillText("GAME OVER", game.width/2-160, game.height/2);
			}

			if(game.gameWon) {
				game.ctxUI.font = "bold 60px monaco";
				game.ctxUI.fillStyle = "yellow";
				game.ctxUI.fillText("You Win!", game.width/2-150, game.height/2);
			}


		}

		function loop() {
			requestAnimFrame(function() {
				loop();
			});
			update();
			render();
		}

		function loadImages() {
			//Show a loading screen while images are being loaded into  the game
			game.ctxUI.font = "bold 50px monaco";
			game.ctxUI.fillStyle = "white";
			game.ctxUI.fillText("loading...", game.width/2-100, game.height/2-25);

			initImages(["./res/player.png", "./res/enemy.png", "./res/bullet.png", "./res/explosion.png"]);

			checkImages();			
		}

		loadImages();

	});	
})();

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
    	window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		window.oRequestAnimationFrame    ||
		window.msRequestAnimationFrame    ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
    	};
})();