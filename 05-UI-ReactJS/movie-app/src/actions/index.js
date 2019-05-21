
const ADD_MOVIE = 'ADD_MOVIE';
const EDIT_MOVIE = 'EDIT_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';

export const addMovie = (movie) =>{
    return{
        type: ADD_MOVIE,
        payload: {
            movie:movie
        }    
    }
}

export const deleteMovie = (index) => {
    return{
        type: DELETE_MOVIE,
        payload: {
            index: index
        }    
    }
}

export const editMovie = (movie,index) => {
    return{
        type: EDIT_MOVIE,
        payload: {
            movie:movie,
            index: index
        }    
    }
}

 