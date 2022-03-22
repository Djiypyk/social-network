import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
    },
})

export const headerAPI = {
    me: () => {
        return axiosInstance.get(`auth/me`)
    },
    login: (data: LoginDataType[]) => {
        return axiosInstance.post<ResponseType>(`auth/login`, {data})
    },
    logOut: () => {
        return axiosInstance.delete<ResponseType>(`auth/login`)
    }
}


//Types

export type LoginDataType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}