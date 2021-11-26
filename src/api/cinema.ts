import { apiFirebase } from '../utils';
import { User} from "../types";
import { mapToArray } from '../helpers';


const getMovies = async (): Promise<User[]>  =>{
    const response =  await apiFirebase.get('/users.json');
    return mapToArray(response.data)
};

export { getMovies }; 
