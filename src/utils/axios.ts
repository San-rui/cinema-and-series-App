import axios from 'axios';

const apiCinema = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    params:{
        api_key: '27aab3b2bf6c01cadfe55264df006e92'
    }
})

const apiFirebase = axios.create({
    baseURL: 'https://cinema-series-4172d-default-rtdb.firebaseio.com/',
    //baseURL: process.env.REACT_APP_DB_FIREBASE
});

export { apiCinema, apiFirebase };