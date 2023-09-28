import React, { useEffect, useRef, useState } from 'react';
import Ball from './Ball';
const Canvas2 = (props) => {
    //set up the canvas
    const canvasRef = useRef({});
    const canvas = canvasRef.current;
    const context = null;
    const width = canvas ? canvas.width : '8000px';
    const height = canvas ? canvas.height : '400px';
    const balls = [];

    useEffect(() => {
        if(!context && canvas) context = canvas.getContext('2d');
        //Our first draw
        if (context) {
            context.fillStyle = '#00000';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            loop();
        }
    }, [context])

    //start the animation
    const loop = () => {
        console.log('inside balls loop');
        context.fillStyle = "rgba(0, 0, 0, 0.25)"; //canvas filling color
        context.fillRect(0, 0, width, height); //apply filling color

        while (balls.length < 25) {
            const size = random(10, 20);
            const x = random(0 + size, width - size);
            const y = random(0 + size, height - size);
            const speedX = random(-7, 7);
            const speedY = random(-7, 7);
            const red = random(0, 255);
            const green = random(0, 255);
            const blue = random(0, 255);

            const ball = new Ball(
                context, x, y, speedX, speedY,
                "rgb(" + red + "," + green + "," + blue + ")",
                size
            );
            balls.push(ball);
        }

        for (let i = 0; i < balls.length; i++) {
            balls[i].draw();
            balls[i].update(width, height);
            balls[i].collisionDetect(balls);
        }

        requestAnimationFrame(loop);
    };

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    return <canvas ref={canvasRef} height='150px' width='800px' style={{ backgroundColor: 'black' }} {...props} />
}


export default Canvas2;