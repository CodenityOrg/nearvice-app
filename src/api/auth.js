import axios from '../plugins/axios';

export const login = (email, password, keepMe=false) => 
    axios.post('/users/login', { email, password, keepMe });

export const loginbyGoogle = (token) =>
    axios.post('/users/google', { token });

export const register = data => 
    axios.post('/users/register', data);