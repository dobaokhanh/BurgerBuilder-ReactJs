import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-c0c3d.firebaseio.com/'
});

export default instance;