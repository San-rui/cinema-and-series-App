export type User ={
    idDB:string,
    name: string,
    lastName: string,
    birthday: string,
    email: string,
    password:string,
    sessionToken?: string,
    role: string,
}

export type Item = {
    poster_path?: string;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: number[];
    id: number;
    idDB?: string;
    original_title?: string;
    original_language?: string;
    title: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average: number;
    media_type?:string
};

export type Store<T> = {
    [name: string]: {
        loading?: boolean;
        items?: T[];
        error?: string;
    };
};

export type AddUserType = Omit<User, 'id'>;

export type UsersStore={
    loading: boolean,
    users: User[],
    error: string
}

export  type UserStore={
    email: string,
    role: string,
    name: string,
    id: string,
    sessionToken: string,
}

export type CinemaState = {
    loading: boolean,
    items: Item[]
    error: string
}

export type CinemaReducer = {
    type: string,
    payload: Item[]
}