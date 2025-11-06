import axios from "axios"
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const BASE_URL = `${API_BASE}/api/users`


export const getAllUsers = async () => {
    const pew = (await (axios.get(BASE_URL))).data.data.users;
    console.log("Get Users:", pew);
    return pew
}

export const getUserById = async (userId) => {
    const pew = (await (axios.get(`${BASE_URL}/${userId}`))).data.data.user
    console.log('api:', pew);
    return pew
}

export const addUser = async (user) => {
    const pew = (await (axios.post(BASE_URL, user))).data
    console.log(pew);
    return pew
}

export const updateUser = async (userId, user) => {
    const pew = (await (axios.put(`${BASE_URL}/${userId}`, user))).data
    console.log("update:", pew);
    return pew
}

export const deleteUserById = async (userId) => {
    const token = localStorage.getItem('token')
    const pew = (await (axios.delete(`${BASE_URL}/${userId}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })))
    console.log(pew);
    return pew
}

export const forgetPass = async (email) => {
    const pew = (await (axios.post(`${BASE_URL}/forgetpass`, { email }))).data
    console.log(pew);
    return pew;
}