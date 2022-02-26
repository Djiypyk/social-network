import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
    },
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pagesCount: number = 10) => {
        return axiosInstance.get(
            `users?page=${currentPage}&count=${pagesCount}`, {}).then(res => res.data)
    },
    unFollowUser: (userId: string) => {
        return axiosInstance.delete(
            `follow/${userId}`, {}).then(res => res.data)
    },
    followUser: (userId: string) => {
        return axiosInstance.post(
            `follow/${userId}`, null, {}).then(res => res.data)
    },
}
