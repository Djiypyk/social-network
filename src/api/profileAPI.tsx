import axios from "axios";
import {ProfileType} from "../Redux/profile-reducer";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7b609e77-8b87-49b1-abc2-87ddc192ab78'
    },
})

export const profileAPI = {
    getProfile(userId: string | number) {
        return axiosInstance.get(`profile/${userId}`)
    },
    async updateProfile(userInfo: ProfileType) {
        return await axiosInstance.put(`profile`, userInfo)
    },
    async updatePhoto(file: FormData) {
        return await axiosInstance.put(`profile/photo`, file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}