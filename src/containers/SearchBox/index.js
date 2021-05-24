import React, { useCallback } from "react";
import { debounce } from "debounce";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";

import TextField from "@material-ui/core/TextField";

import { fetchPageOfMoviesRequest } from "../../store/movies/actions";
import { ROUTES } from "../../services/movieService";

const SearchBox = () => {
  const [t, i18n] = useTranslation("translation");
  const dispatch = useDispatch();

  const apiCall = (querry) => {
    const url = `${ROUTES.MOVIES}?search=${querry}`;
    dispatch(fetchPageOfMoviesRequest(url));
  };

  const debounceSave = useCallback(
    debounce((nextValue) => apiCall(nextValue), 750),
    []
  );

  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values) => {
        debounceSave(values.search);
      }}
    >
      {(props) => (
        <form>
          <TextField
            type="text"
            value={props.values.search}
            onChange={(e) => {
              props.handleChange(e);
              props.handleSubmit(e);
            }}
            name="search"
            label={t("dashboard.searchInput")}
            variant="outlined"
          />
        </form>
      )}
    </Formik>
  );
};

export default SearchBox;
