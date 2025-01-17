import {useState, createContext} from 'react'
import ComponentB from "./ComponentB";

//initializes a new context object (UserContext)
//Acts as a shared data store where components can subscribe to access its value.
export const UserContext = createContext()
function ComponentA(){
    const [user, setUser] = useState("DevIvan")
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            {/*
                'UserContext.Provider' wraps components and shares the 'value' ('user' in this case) with any components in it's tree.

                Every component inside 'UserContext.Provider' can directly access the 'value' without explicit prop drilling.
            */}
            <UserContext.Provider value={user}>
                {/* 
                to make the {user} available to all component nested within it.
                
                Context is hierarchical — if a component isn’t wrapped by a Provided, it cannot access the context.
                 */}
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    )
}
export default ComponentA;