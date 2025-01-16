import {useState, useCallback} from 'react'

function MyComponent () {
    const [isOn, setIson] = useState(true);

    const toggle = useCallback(()=>{
        setIson(prev => !prev)
    }, [isOn]);

    return (
        <div>
            <h4>useCallback()</h4>
            <button
            onClick={toggle}
            >
                {isOn? "Hide" : "Show"}
            </button>
        </div>
    )
}

export default MyComponent