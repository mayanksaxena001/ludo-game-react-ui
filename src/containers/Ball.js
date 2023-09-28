class Ball {
    constructor(ctx, x, y, speedX, speedY, color, size) {
      this.ctx = ctx;
      this.x = x; //horizontal position
      this.y = y; //vertical position
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
      this.size = size;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  
    update(width, height) {
      //change orientation if necessary
      this.x + this.size >= width && (this.speedX = -this.speedX);
      this.x - this.size <= 0 && (this.speedX = -this.speedX);
      this.y + this.size >= height && (this.speedY = -this.speedY);
      this.y - this.size <= 0 && (this.speedY = -this.speedY);
      //update position
      this.x += this.speedX;
      this.y += this.speedY;
    }
  
    collisionDetect(balls) {
      for (let j = 0; j < balls.length; j++) {
        if (this !== balls[j]) {
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < this.size + balls[j].size) {
            const red = this.random(0, 255);
            const green = this.random(0, 255);
            const blue = this.random(0, 255);
  
            balls[j].color = this.color =
              "rgb(" + red + "," + green + "," + blue + ")";
          }
        }
      }
    }
  
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
  
  export default Ball;