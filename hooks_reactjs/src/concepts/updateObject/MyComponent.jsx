import {useState} from 'react'

function MyComponent(){
    const [info, setInfo] = useState(
        {
            name: "Ivan Vargas",
            age: 21,
            gender: "male"
        }
    )

    function handleNameChange(event){
        setInfo(i => ({...i, name: event.target.value}))
    }
    function handleAgeChange(event){
        setInfo(i => ({...i, age: event.target.value}))
    }
    function handleGenderChange(event){
        setInfo(i => ({...i, gender: event.target.value}))
    }

    return(
        <>
        <p>Personal Informations: <br />
        name: {info.name} age: {info.age} gender: {info.gender}
        </p>
        <input type="text" onChange={handleNameChange}/>
        <input type="number" onChange={handleAgeChange}/>
        <input type="text" 
        onChange={handleGenderChange}/>
        </>
    )
}
export default MyComponent