import axios from 'axios';
import { API_URL } from '../config/config';

export const sendUserQuestion = async (senderData) => {
    return axios.post(`${API_URL}/mail`, senderData).then((res) => {
        return res;
    }).catch(e => console.log(e))
}