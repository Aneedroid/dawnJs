import http from './http';

export const getSwapi = async () => {
    const response = await http.get('/swapico');
    return response.data;
};