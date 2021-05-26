import changeLikes from "../../utils/changeLikes";
import {
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_GENRES_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  POST_LIKE_MOVIE_SUCCESS,
} from "./actionTypes";

export const initialState = {
  movies: null,
  movie: null,
  next: null,
  previous: null,
  genres: null,
};

function movieReducer(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        movies: actions.movies,
      };
    case FETCH_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        movie: actions.movie,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        next: actions.next,
      };
    case SET_PREVIOUS_PAGE:
      return {
        ...state,
        previous: actions.previous,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: actions.genres,
      };

    case POST_LIKE_MOVIE_SUCCESS:
      let changeMovies = changeLikes(
        state.movies.results,
        actions.like.movie,
        actions.like.liked
      );
      return {
        ...state,
        movies: changeMovies,
        movie: changeMovies.changedMovie,
      };
    default:
      return state;
  }
}

export default movieReducer;
