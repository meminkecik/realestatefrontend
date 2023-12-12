import axios from "axios"
import { config } from "../helpers/config"
import { getAuthHeader } from "../helpers/auth-header";

const API_URL = config.api.baseUrl; 

export const getAllEstateByPage = async (page=0, size=10, sort="city", type="desc") => {
    const resp = await axios.get(`${API_URL}/estate/getAllPost?page=${page}&size=${size}&sort=${sort}&type=${type}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const saveEstate = async (payload) => {
    const resp = await axios.post(`${API_URL}/estate/saveEstate`, payload, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const deleteEstate = async (id) => {
    const resp = await axios.delete(`${API_URL}/estate/deletePostById/${id}`, {
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}

export const updateEstate = async (id,payload) => {
    const resp = await axios.put(`${API_URL}/estate/updatePost/${id}`, payload,{
        headers: getAuthHeader()
    });
    const data = resp.data;
    return data;
}