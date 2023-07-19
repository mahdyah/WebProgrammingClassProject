import axios from 'axios';

const apiURL = '/api/user/contact'

export const contactUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};
