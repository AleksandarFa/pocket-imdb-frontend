const changeWatchList = (arr, movieId) => {
  const movie = arr.find((movie) => movie.movie.id === movieId);
  movie.watched = true;
  return arr;
};

export default changeWatchList;
