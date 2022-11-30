import axios from 'axios';
import { API_URL } from '../config/config';
import {axiosAuthHeader} from "../config/axios.config";

export const getHomePageMentors = () => {
    return axios.get(`${API_URL}/mentors`).then((res) => {
        return res;
    }).catch(e => console.log(e))
}

export const getAllMentors = async () => {

    return axios.get(`${API_URL}/mentors/all`,await axiosAuthHeader()).then((res) => {
        return res;
    }).catch(e => console.log(e))
}
