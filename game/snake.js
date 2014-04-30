(function() {
	/* SAT.js - Version 0.3 - Copyright 2013 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */
	function x(){function c(b,d){this.x=b||0;this.y=d||0}function k(b,d){this.pos=b||new c;this.points=d||[];this.recalc()}function v(b,d,a){this.pos=b||new c;this.w=d||0;this.h=a||0}function w(){this.b=this.a=null;this.overlapN=new c;this.overlapV=new c;this.clear()}function A(b,d,a){for(var l=Number.MAX_VALUE,c=-Number.MAX_VALUE,e=b.length,h=0;h<e;h++){var g=b[h].c(d);g<l&&(l=g);g>c&&(c=g)}a[0]=l;a[1]=c}function B(b,d,a,l,c,m){var h=q.pop(),g=q.pop();b=e.pop().copy(d).sub(b);d=b.c(c);A(a,c,h);A(l,c,
	g);g[0]+=d;g[1]+=d;if(h[0]>g[1]||g[0]>h[1])return e.push(b),q.push(h),q.push(g),!0;m&&(a=0,h[0]<g[0]?(m.aInB=!1,h[1]<g[1]?(a=h[1]-g[0],m.bInA=!1):(a=h[1]-g[0],l=g[1]-h[0],a=a<l?a:-l)):(m.bInA=!1,h[1]>g[1]?(a=h[0]-g[1],m.aInB=!1):(a=h[1]-g[0],l=g[1]-h[0],a=a<l?a:-l)),l=Math.abs(a),l<m.overlap&&(m.overlap=l,m.overlapN.copy(c),0>a&&m.overlapN.reverse()));e.push(b);q.push(h);q.push(g);return!1}function y(b,d){var a=b.d(),c=d.c(b);return 0>c?-1:c>a?1:0}function C(b,d,a){for(var c=e.pop().copy(d.pos).sub(b.pos),
	t=d.r,m=t*t,h=b.points,g=h.length,f=e.pop(),p=e.pop(),k=0;k<g;k++){var s=k===g-1?0:k+1,q=0===k?g-1:k-1,u=0,r=null;f.copy(b.edges[k]);p.copy(c).sub(h[k]);a&&p.d()>m&&(a.aInB=!1);var n=y(f,p);if(-1===n){f.copy(b.edges[q]);s=e.pop().copy(c).sub(h[q]);n=y(f,s);if(1===n){n=p.e();if(n>t)return e.push(c),e.push(f),e.push(p),e.push(s),!1;a&&(a.bInA=!1,r=p.normalize(),u=t-n)}e.push(s)}else if(1===n){if(f.copy(b.edges[s]),p.copy(c).sub(h[s]),n=y(f,p),-1===n){n=p.e();if(n>t)return e.push(c),e.push(f),e.push(p),
	!1;a&&(a.bInA=!1,r=p.normalize(),u=t-n)}}else{s=f.f().normalize();n=p.c(s);q=Math.abs(n);if(0<n&&q>t)return e.push(c),e.push(s),e.push(p),!1;a&&(r=s,u=t-n,0<=n||u<2*t)&&(a.bInA=!1)}r&&a&&Math.abs(u)<Math.abs(a.overlap)&&(a.overlap=u,a.overlapN.copy(r))}a&&(a.a=b,a.b=d,a.overlapV.copy(a.overlapN).scale(a.overlap));e.push(c);e.push(f);e.push(p);return!0}function D(b,d,a){for(var c=b.points,e=c.length,f=d.points,h=f.length,g=0;g<e;g++)if(B(b.pos,d.pos,c,f,b.normals[g],a))return!1;for(g=0;g<h;g++)if(B(b.pos,
	d.pos,c,f,d.normals[g],a))return!1;a&&(a.a=b,a.b=d,a.overlapV.copy(a.overlapN).scale(a.overlap));return!0}var f={};f.Vector=c;f.V=c;c.prototype.copy=c.prototype.copy=function(b){this.x=b.x;this.y=b.y;return this};c.prototype.perp=c.prototype.f=function(){var b=this.x;this.x=this.y;this.y=-b;return this};c.prototype.rotate=c.prototype.rotate=function(b){var d=this.x,a=this.y;this.x=d*Math.cos(b)-a*Math.sin(b);this.y=d*Math.sin(b)+a*Math.cos(b);return this};c.prototype.reverse=c.prototype.reverse=function(){this.x=
	-this.x;this.y=-this.y;return this};c.prototype.normalize=c.prototype.normalize=function(){var b=this.e();0<b&&(this.x/=b,this.y/=b);return this};c.prototype.add=c.prototype.add=function(b){this.x+=b.x;this.y+=b.y;return this};c.prototype.sub=c.prototype.sub=function(b){this.x-=b.x;this.y-=b.y;return this};c.prototype.scale=c.prototype.scale=function(b,d){this.x*=b;this.y*=d||b;return this};c.prototype.project=c.prototype.g=function(b){var d=this.c(b)/b.d();this.x=d*b.x;this.y=d*b.y;return this};
	c.prototype.projectN=c.prototype.i=function(b){var d=this.c(b);this.x=d*b.x;this.y=d*b.y;return this};c.prototype.reflect=function(b){var d=this.x,a=this.y;this.g(b).scale(2);this.x-=d;this.y-=a;return this};c.prototype.reflectN=function(b){var d=this.x,a=this.y;this.i(b).scale(2);this.x-=d;this.y-=a;return this};c.prototype.dot=c.prototype.c=function(b){return this.x*b.x+this.y*b.y};c.prototype.len2=c.prototype.d=function(){return this.c(this)};c.prototype.len=c.prototype.e=function(){return Math.sqrt(this.d())};
	f.Circle=function(b,d){this.pos=b||new c;this.r=d||0};f.Polygon=k;k.prototype.recalc=k.prototype.recalc=function(){this.edges=[];this.normals=[];for(var b=this.points,d=b.length,a=0;a<d;a++){var l=b[a],l=(new c).copy(a<d-1?b[a+1]:b[0]).sub(l),e=(new c).copy(l).f().normalize();this.edges.push(l);this.normals.push(e)}return this};k.prototype.rotate=k.prototype.rotate=function(b){var d,a=this.points,c=this.edges,e=this.normals,f=a.length;for(d=0;d<f;d++)a[d].rotate(b),c[d].rotate(b),e[d].rotate(b);return this};
	k.prototype.translate=k.prototype.translate=function(b,d){var a,c=this.points,e=c.length;for(a=0;a<e;a++)c[a].x+=b,c[a].y+=d;return this};f.Box=v;v.prototype.toPolygon=v.prototype.j=function(){var b=this.pos,d=this.w,a=this.h;return new k(new c(b.x,b.y),[new c,new c(d,0),new c(d,a),new c(0,a)])};f.Response=w;w.prototype.clear=w.prototype.clear=function(){this.bInA=this.aInB=!0;this.overlap=Number.MAX_VALUE;return this};for(var e=[],r=0;10>r;r++)e.push(new c);for(var q=[],r=0;5>r;r++)q.push([]);var z=
	new w,E=(new v(new c,1,1)).j();f.pointInCircle=function(b,c){return e.pop().copy(b).sub(c.pos).d()<=c.r*c.r};f.pointInPolygon=function(b,c){E.pos.copy(b);z.clear();var a=D(E,c,z);a&&(a=z.aInB);return a};f.testCircleCircle=function(b,c,a){var f=e.pop().copy(c.pos).sub(b.pos),k=b.r+c.r,m=f.d();if(m>k*k)return e.push(f),!1;a&&(m=Math.sqrt(m),a.a=b,a.b=c,a.overlap=k-m,a.overlapN.copy(f.normalize()),a.overlapV.copy(f).scale(a.overlap),a.aInB=b.r<=c.r&&m<=c.r-b.r,a.bInA=c.r<=b.r&&m<=b.r-c.r);e.push(f);
	return!0};f.testPolygonCircle=C;f.testCirclePolygon=function(b,c,a){if((b=C(c,b,a))&&a){c=a.a;var e=a.aInB;a.overlapN.reverse();a.overlapV.reverse();a.a=a.b;a.b=c;a.aInB=a.bInA;a.bInA=e}return b};f.testPolygonPolygon=D;return f}"function"===typeof define&&define.amd?define(x):"object"===typeof exports?module.exports=x():this.SAT=x();
		
	var snakeOne, snakeTwo, food;
	var attachToElement = 'body';
	var isTwoPlayers = false;
	var keys = { up: 38, down: 40, right: 39, left: 37, w: 87, s: 83, d: 68, a: 65 }
	var requestAnimationFrame = window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								window.oRequestAnimationFrame;
	var canvas = {
		appendTo: attachToElement,
		elm: null,
		ctx: null,
		width: 610,
		height: 565,
		init: function() { 
			this.elm = document.createElement('canvas');
			this.elm.width = this.width;
			this.elm.height = this.height;
			this.elm.setAttribute('style', 'background: #252525');
			this.ctx = this.elm.getContext('2d');
			document.querySelector('body').appendChild(this.elm);
		},
		draw: function() {
			canvas.ctx.fillStyle = '#8177F7';

			canvas.ctx.fillRect(0, 0, 5, this.height); // left border
			canvas.ctx.fillRect(this.width - 5, 0, 5, this.height); // right border
			canvas.ctx.fillRect(0, 0, this.width, 5); // top border
			canvas.ctx.fillRect(0, this.height - 5, this.width, 5); // bot border
			canvas.ctx.fillRect(0, 55, this.width, 5); // mid border

			canvas.ctx.fillStyle = '#F4645F';
			canvas.ctx.font = 'bold 20px sans-serif';
			canvas.ctx.fillText('Player 1: '+snakeOne.score, 15, 40);

			if(isTwoPlayers) {
				canvas.ctx.fillStyle = '#5AED8E';
				canvas.ctx.fillText('Player 2: '+snakeTwo.score, 400, 40);
			}
		},
		deathMessage: function() {
			var message = '';
			var count = 0;
			if(!snakeOne.isAlive) {
				message += 'Player 1 is dead ';
				count++;
			}
			if(isTwoPlayers && !snakeTwo.isAlive) {
				message += 'Player 2 is dead';
				count++;
			}

			if(message != '') {
				canvas.ctx.fillStyle = '#ED68A0';
				canvas.ctx.font = 'bold 35px sans-serif';
				canvas.ctx.fillText(message, count == 1 ? 170 : 45, 280);
			}
		},
		clear: function() {
			this.ctx.clearRect(0, 0, this.width, this.height);
		}
	}

	function Snake(posX, posY, keyUp, keyDown, keyRight, keyLeft, direction, color) {
		this.speed = 2;
		this.size = 10;
		this.score = 0;
		this.isAlive = true;
		this.color = color;

		this.snakeBody = [];
		this.snakeBodyLength = 50;
		this.snakeBodyCount = 0;
		this.currentDirection = direction;
		this.newDirection = direction;
		this.steps = 0;
		
		this.pos = { x: posX, y: posY };
		this.key = { up: keyUp, down: keyDown, right: keyRight, left: keyLeft };
		this.directions = { up: 0, right: 1, down: 2, left: 3 };
		this.headCollision = { x: 0, y: 0, w: 0, h: 0 };
		this.bodyCollision = [];

		this.keyEvent = function(code) {
			var direction = null;

			if(code == this.key.up)
				direction = this.directions.up;
			else if(code == this.key.down)
				direction = this.directions.down;
			else if(code == this.key.right)
				direction = this.directions.right;
			else if(code == this.key.left)
				direction = this.directions.left;

			if(direction != null) {
				this.changeDirection(direction);
			}
		}

		this.changeDirection = function(direction) {
			if(direction == this.directions.up && this.currentDirection != this.directions.down)
				this.newDirection = direction;
			else if(direction == this.directions.down && this.currentDirection != this.directions.up)
				this.newDirection = direction;
			else if(direction == this.directions.right && this.currentDirection != this.directions.left)
				this.newDirection = direction;
			else if(direction == this.directions.left && this.currentDirection != this.directions.right)
				this.newDirection = direction;
		}

		this.updateCurrentDirection = function() {
			// snake needs to move 10px for before changing direction
			if(this.steps >= this.size) {
				this.steps = this.speed;
				this.currentDirection = this.newDirection;
			}
			else
				this.steps += this.speed;
		}

		this.move = function() {
			if(this.currentDirection == this.directions.up)
				this.pos.y -= this.speed;
			if(this.currentDirection == this.directions.down)
				this.pos.y += this.speed;
			if(this.currentDirection == this.directions.right)
				this.pos.x += this.speed;
			if(this.currentDirection == this.directions.left)
				this.pos.x -= this.speed;
		}

		this.makeBody = function() {
			if(this.snakeBodyCount > this.snakeBodyLength) {
				this.snakeBody.pop();
				this.bodyCollision.pop();
			}
			else
				this.snakeBodyCount++;

			this.snakeBody.unshift({ x: this.pos.x, y: this.pos.y });

			if(this.snakeBodyCount > 10) {
				this.bodyCollision.unshift({ 
					x: this.snakeBody[10].x + 1,
					y: this.snakeBody[10].y + 1,
					w: this.size - 2,
					h: this.size - 2
				});
			}
		}

		this.makeBodyGrow = function() {
			this.snakeBodyLength += 20;
		}

		this.increaseScore = function() {
			this.score += 10;
		}

		this.snakeMapBounds = function() {
			if((this.pos.x + this.size) > canvas.width - 5)
				this.isAlive = false;
			else if(this.pos.x < 5)
				this.isAlive = false;
			else if((this.pos.y + this.size) > canvas.height - 5)
				this.isAlive = false;
			else if(this.pos.y < 60)
				this.isAlive = false;
		}

		this.isHeadCollision = function(pos) {
			var v = SAT.Vector;
			var b = SAT.Box;
			var snake = new b(new v(this.headCollision.x, this.headCollision.y), this.headCollision.w, this.headCollision.h).toPolygon();
			var collisionObj = new b(new v(pos.x, pos.y), pos.w, pos.h).toPolygon();
			
			return SAT.testPolygonPolygon(snake, collisionObj);
		}

		this.isBodyCollision = function(pos) {
			var v = SAT.Vector;
			var b = SAT.Box;

			for(var x in this.bodyCollision) {
				var snake = new b(new v(this.bodyCollision[x].x, this.bodyCollision[x].y), this.bodyCollision[x].w, this.bodyCollision[x].h).toPolygon();
				var collisionObj = new b(new v(pos.x, pos.y), pos.w, pos.h).toPolygon();
				if(SAT.testPolygonPolygon(snake, collisionObj))
					return true;
			}
			return false;
		}

		this.updateHeadCollision = function() {
			this.headCollision = {
				x: this.pos.x + 1,
				y: this.pos.y + 1,
				w: this.size - 2,
				h: this.size - 2
			};
		}

		this.update = function() {
			this.updateCurrentDirection();
			this.snakeMapBounds();
			this.makeBody();
			this.move();
			this.draw();
			this.updateHeadCollision();
		}

		this.draw = function() {
			canvas.ctx.fillStyle = this.color;

			for(var i in this.snakeBody) {
				canvas.ctx.fillRect(this.snakeBody[i].x, this.snakeBody[i].y, this.size, this.size);
			}

			canvas.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
		}	

		this.updateHeadCollision();
	}

	function Food() {
		this.pos = { x: 0, y: 0 };
		this.collision = { x: 0, y: 0, w: 0, h: 0 };
		this.isTaken = false;
		this.size = 10;

		this.randomPos = function() {
			this.pos.x = (Math.floor((Math.random()*60))*10) + 5;
			this.pos.y = (Math.floor((Math.random()*50))*10) + 60;
			this.updateCollision();
		}

		this.draw = function() {
			canvas.ctx.fillStyle = '#FA6EEA';
			canvas.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
		}

		this.updateCollision = function() {
			this.collision = {
				x: this.pos.x + 1,
				y: this.pos.y + 1, 
				w: this.size - 2,
				h: this.size - 2
			}
		}

		this.randomPos();
		this.updateCollision();
	}

	function snakesCollision() {
		if(isTwoPlayers) {
			if(snakeOne.isHeadCollision(snakeTwo.headCollision) || snakeOne.isBodyCollision(snakeTwo.headCollision))
				snakeTwo.isAlive = false;
			if(snakeTwo.isHeadCollision(snakeOne.headCollision) || snakeTwo.isBodyCollision(snakeOne.headCollision))
				snakeOne.isAlive = false;
		}
	}

	function selfCollision() {
		if(snakeOne.isBodyCollision(snakeOne.headCollision))
			snakeOne.isAlive = false;
		
		if(isTwoPlayers) {
			if(snakeTwo.isBodyCollision(snakeTwo.headCollision))
				snakeTwo.isAlive = false;
		}
	}

	function snakeFoodCollision() {
		if(snakeOne.isHeadCollision(food.collision)) {
			food.isTaken = true;
			snakeOne.makeBodyGrow();
			snakeOne.increaseScore();
		}
		if(isTwoPlayers) {
			if(snakeTwo.isHeadCollision(food.collision)) {
				food.isTaken = true;
				snakeTwo.makeBodyGrow();
				snakeTwo.increaseScore();
			}
		}
	}

	function makeFood() {
		while(true) {
			food = new Food();
			var freeSpace = true;

			if(snakeOne.isHeadCollision(food.collision) || snakeOne.isBodyCollision(food.collision))
				freeSpace = false;
			if(isTwoPlayers) {
				if(snakeTwo.isHeadCollision(food.collision) || snakeTwo.isBodyCollision(food.collision))
					freeSpace = false;
			}

			if(freeSpace) break;
		}
	}

	function keyDownEvent(e) {
		var code = e.keyCode || e.witch;
		snakeOne.keyEvent(code);

		if(isTwoPlayers)
			snakeTwo.keyEvent(code);
	}

	function updateGame() {
		if(!snakeOne.isAlive || (snakeTwo != null && !snakeTwo.isAlive)) {
			canvas.deathMessage();
			return;
		}
		
		canvas.clear();
		canvas.draw();
		snakeOne.update();

		if(isTwoPlayers)
			snakeTwo.update();
		if(food.isTaken)
			makeFood();

		food.draw();
		snakeFoodCollision();
		selfCollision();
		snakesCollision();

		requestAnimationFrame(updateGame);
	}

	function setNumberOfPlayers() {
		var query = window.location.search;
		if(query != '') {
			query = query.substr(1);
			query = query.split('=');
			if(query.length == 2 && query[0] == 'q' && query[1] == '2') {
				isTwoPlayers = true;
			}
		} 
	}

	function init() {
		setNumberOfPlayers();

		canvas.init();
		snakeOne = new Snake(55, 80, keys.up, keys.down, keys.right, keys.left, 1, '#F4645F');

		if(isTwoPlayers)
			snakeTwo = new Snake(545, canvas.height - 55, keys.w, keys.s, keys.d, keys.a, 3, '#5AED8E');

		makeFood()
		document.addEventListener('keydown', keyDownEvent, false);
		updateGame();
	}

	init();
}());