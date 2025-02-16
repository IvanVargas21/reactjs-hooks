// React Hook = special function that allows functional component to use React features without writing class components ( React v16.8). (useState, useEffect, useContext, useReducer, useCallback, and more).

//useState() = a hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM. 
import {useState} from 'react'
function Counter(){
    const [count, setCount]= useState(0);
    
    const increment = () =>{
        //naming convention
        //prev(StateVariable)
        //first letter of our state variable
        setCount(prevCount => prevCount + 1)
        //taking the pending state to calculate the next state
        //not the current state
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () =>{
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button
            onClick={decrement}
            className="counter-button"
            >Decrement</button>
            <button
            className="counter-button"
            onClick={reset}
            >Reset</button>
            <button
            className="counter-button"
            onClick={increment}
            >Increment</button>
        </div>
    )
}
export default Counter;