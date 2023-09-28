import React, { useEffect, useRef, useState } from 'react';
import Ball from './Ball';
class Canvas2 extends React.Component {
    constructor() {
        const canvasRef = useRef({});
        super();
        this.canvas = canvasRef.current;
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


export default Canvas2;