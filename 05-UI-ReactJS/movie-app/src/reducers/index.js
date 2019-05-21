import { combineReducers } from "redux";
let id = 2;
const initState = {
    movies:[
        {'id':0,'title': 'Titanic','duration': 158,'year':1999},
        {'id':1,'title': 'Toy Story','duration': 98,'year':2001},
        {'id':2,'title': 'Star Wars','duration': 124,'year':1978}
    ]
}

const moviesReducer = (state = initState,action)=>{
    let newState = state;
    switch(action.type){

        case 'ADD_MOVIE':
            const newMovie = {
                'id':id++,
                'title': action.payload.title,
                'duration': action.payload.duration,
                'year':action.payload.year
            }
            return {movies: [...state.movies,newMovie]};

        case 'EDIT_MOVIE':
                const editedMovie = {
                    'title': action.payload.title,
                    'duration': action.payload.duration,
                    'year':action.payload.year
                }
                newState.movies.splice(action.payload.id, 1,editedMovie)
                return {movies: newState.movies};
                

        case 'DELETE_MOVIE':
               
               newState.movies.splice(action.payload, 1)
             return {movies: newState.movies}

        default:
            return state
    }
}



export default combineReducers({
    movies: moviesReducer,
})