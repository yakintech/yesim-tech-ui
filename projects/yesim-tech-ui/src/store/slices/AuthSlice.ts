import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosInstance } from "../../api/axiosInstance"
import { tokenStorageHelper } from "../../utils/auth/TokenHelper"



export const fetchAuthControl = createAsyncThunk(
    'auth/fetchAuthControl',
    () => axiosInstance.get("/", {
        headers: {
            Authorization: `Bearer ${tokenStorageHelper.getStoreWithDecryption()}`
        }
    })
        .then(result => {
            if (result.status == 200) {
                return { email: result.data.email, roles: result.data.roles, urls: result.data.urls, status:200 }
            }
            else {
                return { email: "", roles: [], urls: [], status: 401 }
            }
        })
        .catch(error => {
            throw new Error("Auth control failed")
        })
)



interface AuthState {
    isLogin: boolean,
    loading: boolean,
    user: User
}

interface User {
    email: string,
    roles: string[],
    urls: string[]
}

const initialState: AuthState = {
    isLogin: false,
    loading: false,
    user: {
        email: "",
        roles: [],
        urls: []
    }
}

export const AuthSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        loginAuth: (state, action) => {
            state.isLogin = true
            state.user = action.payload
        },
        logoutAuth: (state) => {
            state.isLogin = false
            state.user = {
                email: "",
                roles: [],
                urls: []
            }
            tokenStorageHelper.removeStore()

        }
    },
    extraReducers: builder => {
        builder.addCase(fetchAuthControl.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAuthControl.fulfilled, (state, action) => {

            if (action.payload.status == 401) {
                state.loading = false
                state.isLogin = false
            }
            else{
                state.loading = false
                state.isLogin = true
                state.user = action.payload
            }

          
        })
        builder.addCase(fetchAuthControl.rejected, (state) => {
            state.loading = false
            state.isLogin = false
        })
    }
})

export const { loginAuth, logoutAuth } = AuthSlice.actions

export default AuthSlice.reducer




// var token = tokenStorageHelper.getStoreWithDecryption()
// if (!token) {
//     setlogin(false)
//     setloading(false)
//     return
// }

// axiosInstance.get("/", {
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// })
//     .then(result => {
//         if (result.status === 200) {
//             setlogin(true)
//             setloading(false)
//             setuser({ email: result.data.email, roles: result.data.roles, urls: result.data.urls })
//         }
//         else {
//             setlogin(false)
//             setloading(false)
//         }
//     })
//     .catch(error => {
//         setlogin(false)
//         setloading(false)
//     })