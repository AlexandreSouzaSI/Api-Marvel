import axios from 'axios';
import md5 from 'md5';

const publicKey = 'd21f6c71a496da355ec9f74349138dd4';
const privateKey = '99e524a90cec41f7ee9c8ff9c6a0a1ef502be8b8';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    },
});

export default api;