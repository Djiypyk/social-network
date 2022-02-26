import axios from "axios";


export const API = {
    getUsers: (currentPage: number = 1, pagesCount: number = 10) => {
        return axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pagesCount}`, {
                withCredentials: true
            }).then(res => res.data)
    },
    unFollowUser: (userId: string) => {
        return axios.delete(
            `https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
                }
            }).then(res => res.data)
    },
    followUser: (userId: string) => {
        return axios.post(
            `https://social-network.samuraijs.com/api/1.0//follow/${userId}`, null, {
                withCredentials: true,
                headers: {
                    'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
                }
            }).then(res => res.data)
    }
}
