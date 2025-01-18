import { useState, useEffect, useRef } from 'react';

function NewComponent() {
    // let [number, setNumber] = useState(0);
    // const ref = useRef(5)
    // console.log(ref)


    //  - When the component mounts and renders.
    //  - React sees the ref attribute on textarea.
    //  - React automatically updates the textAreaRef.current to reference the <textarea> DOM node.
    const textAreaRef1 = useRef(null)
    const textAreaRef2 = useRef(null)
    const textAreaRef3 = useRef(null)
    // console.log(textAreaRef1)
    //indicator if the page re-renders.
    //since no dependencies is passed.
    useEffect(()=>{
        console.log('Component Rendered!')
        console.log(textAreaRef1)
        console.log(textAreaRef2)
        console.log(textAreaRef3)
    })

    function handleClick1() {
        textAreaRef1.current.focus()
        textAreaRef1.current.style.backgroundColor = "yellow"
        textAreaRef2.current.style.backgroundColor = ""
        textAreaRef3.current.style.backgroundColor = ""
    }
    function handleClick2() {
        textAreaRef2.current.focus()
        textAreaRef2.current.style.backgroundColor = "yellow"
        textAreaRef1.current.style.backgroundColor = ""
        textAreaRef3.current.style.backgroundColor = ""
    }

    function handleClick3() {
        textAreaRef3.current.focus()
        textAreaRef3.current.style.backgroundColor = "yellow"
        textAreaRef1.current.style.backgroundColor = ""
        textAreaRef2.current.style.backgroundColor = ""
    }


    return(
        <div>
            <button
            onClick={handleClick1}
            >
                Click Me!
            </button>
            <br />
            <textarea ref={textAreaRef1}></textarea>
            <br />

            <button
            onClick={handleClick2}
            >
                Click Me!
            </button>
            <br />
            <textarea ref={textAreaRef2}></textarea>
            <br />

            <button
            onClick={handleClick3}
            >
                Click Me!
            </button>
            <br />
            <textarea ref={textAreaRef3}></textarea>
        </div>
    )
}

export default NewComponent