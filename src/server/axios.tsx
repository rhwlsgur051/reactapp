import axios from 'axios';

const serverUrl: string = 'http://localhost';
const port: number = 8000;

const api = axios.create({
    baseURL: `${serverUrl}:${port}`,
    timeout: 5000,
})


export const get = async (endpoint: string, params?: object) => {
    return await api.get(endpoint, params);
}

export const post = async (endpoint: string, body: object) => {
    return await api.post(endpoint, body);
}

export const put = async (endpoint: string, body: object) => {
    return await api.put(endpoint, body)
}

export const remove = async (endpoint: string, body: object) => {
    return await api.delete(endpoint, body);
}