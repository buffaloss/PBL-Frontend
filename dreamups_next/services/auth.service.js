import axios from 'axios';
import { API_URL } from '../config/config';

export const login = (data) => {
    return axios.post(`${API_URL}/auth/login`, {...data}).then((res) => {
        return res;
    }).catch(e => console.log(e))
}

export const registerUser = (data) => {
    return axios.post(`${API_URL}/auth/register`, {...data}).then((res) => {
        return res;
    }).catch(e => console.log(e))
}

export const getAuthenticatedUser = async (accessToken) => {
    return axios
        .get(`${API_URL}/users/authenticated-user`, { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(res => {
            return res;
        })
        .catch(e => {
            return e;
        });
};

