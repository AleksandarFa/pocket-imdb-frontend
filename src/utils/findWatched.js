const findWatched = (arr, userId, movieId) => {
  const item = arr.find((movie) => {
    return movie.movie.id === movieId && movie.user === userId;
  });
  return item && item["watched"];
};

export default findWatched;
