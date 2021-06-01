import * as Yup from "yup";

import {
  MOVIE_TITLE_MIN,
  MOVIE_TITLE_MAX,
  MOVIE_DESCRIPTION_MIN,
  MOVIE_DESCRIPTION_MAX,
} from "../../consts/validations";

const createMovieSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required.")
    .min(MOVIE_TITLE_MIN, "Title is too short.")
    .max(MOVIE_TITLE_MAX, "Title is too long"),
  description: Yup.string()
    .required("Description is required.")
    .min(MOVIE_DESCRIPTION_MIN, "Description is too short.")
    .max(MOVIE_DESCRIPTION_MAX, "Description is too long."),
});

export default createMovieSchema;
