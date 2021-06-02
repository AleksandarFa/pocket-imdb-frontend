import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { makeSelectMovie } from "../../store/movies/selectors";
import { makeSelectGenre } from "../../store/movies/selectors";
import { fetchMovieOMDBRequest } from "../../store/movies/actions";
import { createMovieRequest } from "../../store/movies/actions";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    margin: 10,
    width: "40%",
  },
});

const CreateForm = () => {
  const [t, i18n] = useTranslation("translation");
  const classes = useStyles();
  const movie = useSelector(makeSelectMovie());
  const genres = useSelector(makeSelectGenre());
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      dispatch(fetchMovieOMDBRequest(values));
    },
  });

  useEffect(() => {
    const genre = genres && genres.find((genre) => genre.name == movie.genre);
    const newData = movie && { ...movie };
    if (newData) {
      newData.genre = genre;
    }
    newData && newData.genre && dispatch(createMovieRequest(newData));
  }, [movie]);

  return (
    <Box m={3}>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Typography variant="h6" styles={{}}>
          {t("createMovie.titlePage2")}
        </Typography>
        <TextField
          id="title"
          name="title"
          label={t("createMovie.titleForm")}
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          variant="outlined"
          className={classes.item}
        />
        <Button type="submit" color="primary" variant="contained">
          {t("createMovie.submitBtn")}
        </Button>
      </form>
      {movie && (
        <Chip
          label={t("createMovie.createMovieSuccess")}
          color="primary"
          style={{ backgroundColor: "#4caf50" }}
        />
      )}
    </Box>
  );
};

export default CreateForm;
