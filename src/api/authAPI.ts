import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '7b609e77-8b87-49b1-abc2-87ddc192ab78',
        "Content-type": "application/json"
    },
})

export const authAPI = {
    me: () => {
        return axiosInstance.get(`auth/me`)
    },
    login: (data: LoginDataType) => {
        return axiosInstance.post(`auth/login`, JSON.stringify(data))
    },
    logOut: () => {
        return axiosInstance.delete(`auth/login`)
    }
}


//Types

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string | null
}