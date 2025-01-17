import {useState, useEffect} from 'react';


function DigitalClock() {
    //Fri Jan 17 2025 16:49:
    //new Date() objects are static
    const [time, setTime] = useState(new Date())
    console.log(new Date())
    
    //run only on mount
    //create new instance of Date object every second.
    useEffect(()=>{
        //returns a uniqu id, which we can use to clear the interval later
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);
        
        //invoked when the component unmounts
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])


    function formatTime(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM";

        //get the remainder the reassign.
        //12 % 12 = 0; '0' is False
        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        //if time < 10, means it has no leading zero
        //return 0 if number<10, then concatenate it with out number(time)
        return (number < 10 ? "0" : "") + number
    }
    return(
        <div className="clock-container">
            <div className="clock">
                <span>
                    {formatTime()}
                </span>
            </div>
        </div>
    )
}

export default DigitalClock