const changeWatched = (arr, movieId, userId) => {
  const movie = arr.find((movie) => movie.id === movieId);
  movie.watch_list.push(userId);
  return { results: arr, changedMovie: movie };
};

export default changeWatched;
