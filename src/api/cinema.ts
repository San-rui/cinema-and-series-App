import { Item } from '../types';
import { apiCinema } from '../utils';


const getMovies = async (): Promise<Item[]> => {
    const response =  await apiCinema.get('/search/multi?');

    console.log(response.data);

    return response.data
};


export { getMovies }; 
