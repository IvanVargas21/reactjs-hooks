import React, {useState} from 'react'

function MyComponent() {

    const [name, setName]= useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName =()=>{
        setName("SpongeBob")
    }
    const incrementAge = ()=>{
        setAge(age + 1)
    }
    const toggleEmployedStatus = ()=>{
        setIsEmployed(!isEmployed)
    }
    return (
        <>
        <p>Name: {name}</p>
        <button
        onClick={updateName}
        >Set Age</button>
        <p>Age: {age}</p>
        <button
        onClick={incrementAge}
        >
        Increment Age
        </button>
        <p>Is Employed: {isEmployed ? "True" : "False"}</p>
        <button 
        onClick={toggleEmployedStatus}
        >Set Employed</button>
        </>
        
    )
}

export default MyComponent