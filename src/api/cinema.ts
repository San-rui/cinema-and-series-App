import { Item } from '../types';
import { apiCinema } from '../utils';


const getMovies = async (): Promise<Item[]> => {
    const response =  await apiCinema.get('/movie/top_rated?');

    console.log(response.data);

    return response.data
};


export { getMovies }; 
