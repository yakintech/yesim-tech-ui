import { createContext, useEffect, useState } from "react";
import { tokenStorageHelper } from "../utils/auth/TokenHelper";
import { axiosInstance } from "../api/axiosInstance";


export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: any) => {

    const [isLogin, setlogin] = useState(false)
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState({})

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
                    setuser({ email: result.data.email, roles: result.data.roles, urls: result.data.urls })
                }
                else {
                    setlogin(false)
                    setloading(false)
                }
            })
            .catch(error => {
                setlogin(false)
                setloading(false)
            })
    }, [])


    const login = (user: any) => {
        setlogin(true)
        setuser(user)
    }

    const logout = () => {
        setlogin(false)
    }


    return <AuthContext.Provider value={{ login, logout, isLogin, loading, user }}>{children}</AuthContext.Provider>

}



export type AuthContextType = {
    isLogin: boolean,
    login: (user: any) => void,
    logout: () => void,
    loading: boolean,
    user: any
}


