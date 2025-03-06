export const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`;

const API_ENDPOINTS = {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/signup`,
    TASKS: `${BASE_URL}/task`,
    CREATE_TASK: '/task',
    UPDATE_TASK: `${BASE_URL}/task`,
    DELETE_TASK: `${BASE_URL}/task`,
};

export default API_ENDPOINTS;
