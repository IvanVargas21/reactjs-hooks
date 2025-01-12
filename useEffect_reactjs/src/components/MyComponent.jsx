// - useEffect / sidecode
// - React Hook that tells React DO SOME CODE WHEN (pick one):
//     - This component re-renders
//     - This component mounts
//     - The state of a value

// useEffect(function, [dependencies])

// useEffect(( ) => { })  //Runs after every re-render.
// useEffect(() => {}, [ ]) //Runs only on mount.
// useEffect(() => {}, [value} //Runs on mount + when value changes.


//USES
//- Event Listeners.
// - DOM Manipulation.
// - Subscription (real-time updates).
// - Fetching Data from an API.
// - Clean up when a component unmounts.

import React from 'react'
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green')
    function addCount(){
      setCount(count + 1)
    }
    function subtractCount(){
      setCount(count - 1)
    }

    function changeColor(){
      setColor( color => color === 'green' ? 'red' : 'green')
    }


    useEffect(()=>{
      document.title =`Count: ${count} Color: ${color}`;

      // return () =>{
      //   //some cleanup code
      // }
      
    },[count,color])

    return (
      <div>
        <p
        style={{color: color}}
        >Count: {count} </p>
        <button
        onClick={addCount}
        >Add</button>
        <button
        onClick={subtractCount}
        >
          Subtract
        </button>
        <button
        onClick={changeColor}
        
        >Change Color</button>
      </div>
    )
}

export default MyComponent