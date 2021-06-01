import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { createMovieRequest } from "../../store/movies/actions";
import { fetchGenresRequest } from "../../store/movies/actions";
import { makeSelectGenre } from "../../store/movies/selectors";
import { ROUTES } from "../../services/movieService";
import createMovieSchema from "./validations";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
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
  const genres = useSelector(makeSelectGenre());
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      genre: "1",
      description: "",
    },
    validationSchema: createMovieSchema,
    onSubmit: (values) => {
      values["genre"] = genres.find((genre) => genre.id == values.genre);
      dispatch(createMovieRequest(values));
    },
  });

  useEffect(() => {
    dispatch(fetchGenresRequest(ROUTES.GENRES));
  }, []);

  return (
    <Box m={3}>
      <Typography variant="h4">{t("createMovie.titlePage")}</Typography>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <TextField
          id="title"
          name="title"
          label={t("createMovie.titleForm")}
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.errors.title}
          helperText={formik.errors.title}
          className={classes.item}
        />
        <NativeSelect
          id="select-label"
          name="genre"
          label={t("createMovie.genreForm")}
          onChange={formik.handleChange}
          className={classes.item}
        >
          {genres &&
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
        </NativeSelect>
        <TextField
          id="description"
          label={t("createMovie.description")}
          multiline
          rows={6}
          placeholder={t("createMovie.descPlaceholder")}
          variant="outlined"
          values={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
          helperText={formik.errors.description}
          className={classes.item}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          className={classes.item}
        >
          {t("createMovie.submitBtn")}
        </Button>
      </form>
    </Box>
  );
};

export default CreateForm;
