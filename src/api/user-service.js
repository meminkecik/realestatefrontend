import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; 


export const saveUser = async (payload) => {
    const resp = await axios.post(`${API_URL}/user/save`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteUser = async (id) => {
    const resp = await axios.delete(`${API_URL}/user/delete/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const updateUser = async (id,payload) => {
    const resp = await axios.put(`${API_URL}/user/updateUser/${id}`, payload,{
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const getUser = async (id) => {
    const resp = await axios.get(`${API_URL}/user/getUser/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}