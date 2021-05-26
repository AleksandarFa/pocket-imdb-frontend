function changeLikes(arr, movie_id, like) {
  let movie = arr.find((movie) => movie.id === movie_id);
  if (like) {
    movie.num_of_likes++;
    return { results: arr, changedMovie: movie };
  }
  movie.num_of_dislikes++;
  return { results: arr, changedMovie: movie };
}

export default changeLikes;
