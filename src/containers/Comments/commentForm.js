import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import commentForm from "./validations";
import { postMovieCommentRequest } from "../../store/comments/actions";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  form: {
    margin: 24,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textField: {
    width: "80%",
  },
  submitBtn: {
    marginTop: 24,
  },
});

const PostComment = ({ movieId, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("translation");

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: commentForm,
    onSubmit: (values) => {
      const data = {
        movie: movieId.id,
        user: user.id,
        comment: values.comment,
      };
      dispatch(postMovieCommentRequest(data));
    },
  });
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
        id="comment"
        label={t("commentSection.label")}
        multiline
        rows={6}
        placeholder={t("commentSection.placeholder")}
        variant="outlined"
        className={classes.textField}
        values={formik.values.comment}
        onChange={formik.handleChange}
        error={formik.errors.comment}
        helperText={formik.errors.comment}
      />
      <Button
        className={classes.submitBtn}
        type="submit"
        variant="outlined"
        color="primary"
      >
        {t("commentSection.submitBtn")}
      </Button>
    </form>
  );
};

export default PostComment;
