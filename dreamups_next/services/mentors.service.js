import axios from 'axios';
import { API_URL } from '../config/config';

export const getHomePageMentors = () => {
    return axios.get(`${API_URL}/mentors`).then((res) => {
        return res;
    }).catch(e => console.log(e))
}