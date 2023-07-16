
import { createContext, useState } from "react";

type AuthContextType = {
    auth:any, 
    setAuth:any,
    roles?:[any],
    user?:any,
}

type AuthUser={
    auth:string, 
    pwd:string, 
    roles:string, 
    accessToken:string
}

const AuthContext = createContext({}as AuthContextType);

type AuthcontextT={
    children:React.ReactElement;
}

export const AuthProvider = ({ children }:AuthcontextT) => {
    const [auth, setAuth] = useState<AuthUser |null>(null);
    const roles=null
    const user=null
    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;