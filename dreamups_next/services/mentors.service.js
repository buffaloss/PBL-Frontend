import axios from 'axios';
import { API_URL } from '../config/config';
<<<<<<< HEAD
import {axiosAuthHeader} from "../config/axios.config";
=======
import { axiosAuthHeader } from "../config/axios.config";
>>>>>>> 7d2209d36d3ea04d7a1e10acc14637c1f5a191b0

export const getFixedNrMentors = () => {
    return axios.get(`${API_URL}/mentors/limit`).then((res) => {
        return res;
    }).catch(e => console.log(e))
}

export const getAllMentors = async () => {

<<<<<<< HEAD
    return axios.get(`${API_URL}/mentors/all`,await axiosAuthHeader()).then((res) => {
=======
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
>>>>>>> 7d2209d36d3ea04d7a1e10acc14637c1f5a191b0
        return res;
    }).catch(e => console.log(e))
}
