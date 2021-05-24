import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { ROUTES } from "../../services/movieService";
import {
  fetchGenresRequest,
  fetchPageOfMoviesRequest,
} from "../../store/movies/actions";

import { makeSelectGenre } from "../../store/movies/selectors";

import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  btn: {
    margin: theme.spacing(2),
  },
}));

const GenreFilter = () => {
  const dispatch = useDispatch();
  const genres = useSelector(makeSelectGenre());
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      genre: "",
    },
    onSubmit: (values) => {
      const url = `${ROUTES.MOVIES}?genre=${values.genre}`;
      dispatch(fetchPageOfMoviesRequest(url));
    },
  });

  useEffect(() => {
    dispatch(fetchGenresRequest(ROUTES.GENRES));
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <form onSubmit={formik.handleSubmit}>
        <NativeSelect
          id="select-label"
          name="genre"
          label="Genre"
          onChange={formik.handleChange}
        >
          {genres &&
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
        </NativeSelect>
        <Button type="submit" variant="outlined" className={classes.btn}>
          Filter
        </Button>
      </form>
    </FormControl>
  );
};

export default GenreFilter;
