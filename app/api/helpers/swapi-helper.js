const axios = require('axios');

const getSwapiData = async (url) => {
    const swapiHttp = axios.create({
        baseURL: 'https://swapi.co/api',
        headers: {
            Accept: 'application/json'
        }
    });

    try{
        const res =  await swapiHttp.get(url);
        return res.data;
    }
    catch (err) {
        console.log('Error : ', err.message);
    }
};

module.exports = {
    getSwapiData
};