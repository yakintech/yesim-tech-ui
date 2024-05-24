import { createContext, useEffect, useState } from "react";
import { tokenStorageHelper } from "../utils/auth/TokenHelper";
import { axiosInstance } from "../api/axiosInstance";


export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: any) => {

    const [isLogin, setlogin] = useState(false)
    const [loading, setloading] = useState(true)

    useEffect(() => {

        var token = tokenStorageHelper.getStoreWithDecryption()

        axiosInstance.get("/", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(result => {
                if (result.status === 200) {
                    setlogin(true)
                    setloading(false)
                }
                else{
                    setlogin(false)
                    setloading(false)
                }
            })
            .catch(error => {
                setlogin(false)
                setloading(false)
            })
    }, [])


    const login = () => {
        setlogin(true)
    }

    const logout = () => {
        setlogin(false)
    }


    return <AuthContext.Provider value={{ login, logout, isLogin, loading }}>{children}</AuthContext.Provider>

}



export type AuthContextType = {
    isLogin: boolean,
    login: () => void,
    logout: () => void,
    loading: boolean
}


