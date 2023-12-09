import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; 

export const getEstate = async (id) => {
    const resp = await axios.get(`${API_URL}/realEstate/getEstate/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const saveEstate = async (payload) => {
    const resp = await axios.post(`${API_URL}/realEstate/save`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteEstate = async (id) => {
    const resp = await axios.delete(`${API_URL}/realEstate/delete/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const updateEstate = async (id,payload) => {
    const resp = await axios.put(`${API_URL}/realEstate/updateRealEstate/${id}`, payload,{
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}