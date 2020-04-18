import axios from '../plugins/axios';

export const login = (email, password, keepMe=false) => 
    axios.post('/users/login', { email, password, keepMe });