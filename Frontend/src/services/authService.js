import axios from 'axios';
import api from './api';
import API_ENDPOINTS from './endpoints';

// User login
export const loginUser = (userData) => axios.post(API_ENDPOINTS.LOGIN, userData);

// User signup
export const signupUser = (userData) => axios.post(API_ENDPOINTS.REGISTER, userData);
