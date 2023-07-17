import { createContext, useEffect, useState } from "react";
import { loginUser } from "../services/Login";
import { logoutUser } from "../services/Logout";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        await loginUser(inputs).then((result) => {
            setCurrentUser(result.data)
        })

    }
    const logout = async () => {
       await logoutUser().then((result) => {
        setCurrentUser(null);
        console.log(result.data)
       })
        
    }

    useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        <AuthContext.Provider value={{currentUser, login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}