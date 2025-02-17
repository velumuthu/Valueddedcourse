import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function Movingtext() {
    const [Position, setPosition] = useState(1800);
    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prev) => (prev <= -900 ? 1800 : prev - 5));
        }, 108);
        return () => clearInterval(interval);
    },);
        
  return (
    <div className='text-container'> 
      <p className='Movingtext' style={{transform:`translateX(${Position}px)`,transitionDuration:"0.5s",transitionBehavior:"smooth"}}>
      Welcome to KKM <b>(BALAJI SEA FOODS)</b> Fresh Foods! Enjoy Fresh & Healthy Meals, Delivered to Your Doorstep! ,Mobile:<b> 9787178910, 8695172090 </b>Email:Velumbalaji@gmail.com
      </p>
    </div>
  );
}

export default Movingtext;
