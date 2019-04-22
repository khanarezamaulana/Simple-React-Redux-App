import { combineReducers } from 'redux';

const movieReducer = () => {
    return [
        { title: "Captain Marvel", duration: "02:30:00" },
        { title: "Avangers: End Games", duration: "03:03:00" },
        { title: "Avangers: Infinity War", duration: "02:33:00" },
        { title: "Shazam", duration: "02:23:00" },
    ]
}

const movieSelectedReducer = (selectedMovie = null, action) => {
    if (action.type === "MOVIE_SELECTED") {
        return action.data;
    }
    else {
        return selectedMovie;
    }
}

export default combineReducers({
    movie: movieReducer,
    selectedMovie: movieSelectedReducer
})
 