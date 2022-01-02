import axios from 'axios';

let axiosInstans = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const getUsers = () => {
    return axiosInstans.get('/users');
}

const getUser = (id) => {
    return axiosInstans.get('users/' + id);
}

export {
    getUsers, getUser
}