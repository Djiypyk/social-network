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
    getUserStatus(userId: string | number) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return axiosInstance.put(`profile/status`, {status})
    },
    async updateProfile(userInfo: ProfileType) {
        return await axiosInstance.put(`/profile`, userInfo)
    },
    async savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return await axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    async saveProfile(profile: ProfileType) {
        return axiosInstance.put(`profile`, profile)
    }
}