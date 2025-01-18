import { useContext } from "react";
//context object that was created using createContext() in Component A
//an object that react uses to track the shared data(context)
//It inlcudes the Provider (UserContext.Provider) and the consumer (UserContext.consumer)
import { UserContext } from "./ComponentA";

function ComponentD(){
    {/*
        'Consuming the Context value.'

        'useContext'(UserContext) allows any component to subscribe to the context value.

        In 'ComponentC' and 'ComponentD', the 'user' value '{"DevIvan"}' is accessed directly.
    */}
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{user}</h2>
        </div>
    )
}
export default ComponentD;