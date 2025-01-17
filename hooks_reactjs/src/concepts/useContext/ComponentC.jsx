import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC(){
    {/*
        'Consuming the Context value.'

        'useContext'(UserContext) allows any component to subscribe to the context value.

        In 'ComponentC' and 'ComponentD', the 'user' value '{"DevIvan"}' is accessed directly.
    */}
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>

            <ComponentD/>
        </div>
    )
}
export default ComponentC;