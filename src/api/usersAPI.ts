import axios from "axios";
import {filterValuesI} from "../components/SearchForm/SearchForm";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
    },
})

export const usersAPI = {
    getUsers: (currentPage: number = 1, pagesCount: number = 10, filter:filterValuesI = {name:'',friends:'null'}) => {
        return axiosInstance.get(
        `users?page=${currentPage}&count=${pagesCount}${filter.name !== '' ?`&term=${filter.name}` : ''}${filter.friends !== 'null' ? `&friend=${filter.friends}` : ''}`)
            .then(res => res.data)
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
