import axios from 'axios';

const apiCinema = axios.create({
    baseURL : process.env.REACT_APP_DB_API,
    params:{
        api_key: process.env.REACT_APP_DB_API_KEY
    }
})

const apiFirebase = axios.create({
    baseURL: process.env.REACT_APP_DB_FIREBASE
});

export { apiCinema, apiFirebase };