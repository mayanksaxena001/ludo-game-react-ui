import React, { useEffect, useRef } from 'react';


const Canvas = (props) => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    //Our first draw
    context.fillStyle = '#00000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  return <canvas ref={canvasRef} height='150px' width='800px' style={{ backgroundColor: 'black' }} {...props} />
}
export default Canvas;