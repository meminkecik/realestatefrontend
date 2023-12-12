import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; 

export const login = async (payload) => {
    const resp = await axios.post(`${API_URL}/auth/login`, payload);
    const data = resp.data;
    return data;
}

export const getMe = async () => {
    const resp = await axios.get(`${API_URL}/auth/me`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

