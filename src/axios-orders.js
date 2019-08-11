import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4b6fd.firebaseio.com/'
});

export default instance;
