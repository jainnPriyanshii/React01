import React from "react";
import Usercontext from "./Usercontext";

const UsercontextProvider  = ({children}) =>{
    const [User , SetUser] = React.useState(null)
 return(
    <Usercontext.Provider value={{User , SetUser}}>
    {children}
    </Usercontext.Provider>
 )


}

export default UsercontextProvider;

