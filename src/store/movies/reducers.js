import changeLikes from "../../utils/changeLikes";
import changeWatched from "../../utils/changeWatched";
import changeWatchList from "../../utils/changeWatchList";

import {
  FETCH_ALL_MOVIES_SUCCESS,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_GENRES_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREVIOUS_PAGE,
  POST_LIKE_MOVIE_SUCCESS,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_WATCH_LIST_SUCCESS,
  ADD_WATCH_LIST_ITEM_SUCCESS,
  UPDATE_WATCH_LIST_ITEM_SUCCESS,
  REMOVE_WATCH_LIST_ITEM_SUCCESS,
} from "./actionTypes";

export const initialState = {
  movies: null,
  movie: null,
  next: null,
  previous: null,
  genres: null,
  popular: null,
  watchList: null,
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
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popular: actions.popular,
      };
    case FETCH_WATCH_LIST_SUCCESS:
      return {
        ...state,
        watchList: actions.watchList,
      };
    case ADD_WATCH_LIST_ITEM_SUCCESS:
      const changedMovies = changeWatched(
        state.movies.results,
        actions.movie.movie.id,
        actions.movie.user
      );
      return {
        ...state,
        movies: changedMovies,
        movie: changedMovies.changedMovie,
      };
    case UPDATE_WATCH_LIST_ITEM_SUCCESS:
      const changedWatchList = changeWatchList(
        state.watchList,
        actions.data.movie.id
      );
      return {
        ...state,
        watchList: [...changedWatchList],
      };
    case REMOVE_WATCH_LIST_ITEM_SUCCESS:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.movie.id !== actions.movieId
        ),
      };
    default:
      return state;
  }
}

export default movieReducer;
