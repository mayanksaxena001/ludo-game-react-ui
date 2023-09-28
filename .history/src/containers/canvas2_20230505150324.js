import React, { useEffect, useRef, useState } from 'react';
class Canvas2 extends React.Component {
    constructor() {
        super();
        this.canvas = null;
        this.ctx = null;

        this.width = null;
        this.height = null;

        this.balls = [];
    }

    loop = () => {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; //canvas filling color
        this.ctx.fillRect(0, 0, this.width, this.height); //apply filling color

        while (this.balls.length < 25) {
            const size = this.random(10, 20);
            const x = this.random(0 + size, this.width - size);
            const y = this.random(0 + size, this.height - size);
            const speedX = this.random(-7, 7);
            const speedY = this.random(-7, 7);
            const red = this.random(0, 255);
            const green = this.random(0, 255);
            const blue = this.random(0, 255);

            const ball = new Ball(
                this.ctx, x, y, speedX, speedY,
                "rgb(" + red + "," + green + "," + blue + ")",
                size
            );
            this.balls.push(ball);
        }

        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].draw();
            this.balls[i].update(this.width, this.height);
            this.balls[i].collisionDetect(this.balls);
        }

        requestAnimationFrame(this.loop);
    };

    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount() {
        //set up the canvas
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        //start the animation
        this.loop();
    }

    render() {
        return (
            <div>
                <h1>React bouncing balls</h1>
                <canvas ref="canvas" width={640} height={425} />
            </div>
        );
    }
}

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

export default Canvas2;