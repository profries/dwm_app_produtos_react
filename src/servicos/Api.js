import axios from 'axios';
const Api = axios.create({
    baseURL: 'http://localhost:4200/produtos'
})

export default Api;