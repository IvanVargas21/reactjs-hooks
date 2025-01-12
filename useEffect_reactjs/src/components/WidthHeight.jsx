import React from 'react'
import {useState, useEffect} from "react";
const WidthHeight = () => {
    const [width, setWidth ] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    
    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        //runs twice if the strict mode is enabled
        //development only setup
        //cleanup cycle
        console.log("EVENT LISTENER ADDED")

        //when user navigates away from the page
        //during the unmount this cleanup function runs
        return ()=>{
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER Removed")
        }
    },[])
    useEffect(()=>{
        document.title = `Size: ${width}px x ${height}`;
    },[width, height])
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    return (
        <div>
            <p>Window Height: {width}</p>
            <p>Window Width: {height}</p>
        </div>
    )
}

export default WidthHeight