import axios from 'axios';
import { API_URL } from '../config/config';
import { axiosAuthHeader } from "../config/axios.config";

export const getFixedNrMentors = () => {
    return axios.get(`${API_URL}/mentors/limit`).then((res) => {
        return res;
    }).catch(e => console.log(e))
}

export const getAllMentors = async () => {

    return axios.get(`${API_URL}/mentors/all`, await axiosAuthHeader()).then((res) => {
        return res;
    }).catch(e => console.log(e))
}


export const searchMentors = async (tagsArray) => {
    // post?
    return axios.post(`${API_URL}/mentors/search`, { tags: tagsArray }).then((res) => {
        return res;
    }).catch(e => console.log(e))
}



export const searchQueryMentors = async (tagsArray) => {

    return axios.post(`${API_URL}/mentors/search?tag=${tagsArray.join(',')}`, tagsArray).then((res) => {
        return res;
    }).catch(e => console.log(e))
}
