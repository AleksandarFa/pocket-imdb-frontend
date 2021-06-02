const changeWatched = (arr, movieId, userId) => {
  const movie = arr.find((movie) => movie.id === movieId);
  movie.watch_list.push(userId);
  let file = movie.cover_image.file.replace("http://localhost:8001", "");
  let thumbnail = movie.cover_image.thumbnail.replace(
    "http://localhost:8001/",
    ""
  );
  movie.cover_image.file = file;
  movie.cover_image.thumbnail = thumbnail;
  return { results: arr, changedMovie: movie };
};

export default changeWatched;
