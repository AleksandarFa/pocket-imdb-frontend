import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchMovieCommentsRequest } from "../../store/comments/actions";
import { makeSelectComments } from "../../store/comments/selectors";
import Comment from "./comment";
import PostComment from "./commentForm";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
  },
});

const CommentSection = ({ movieId, user }) => {
  const dispatch = useDispatch();
  const comments = useSelector(makeSelectComments());
  const classes = useStyles();
  const [t, i18n] = useTranslation("translation");

  useEffect(() => {
    const endpoint = `?movie=${movieId.id}`;
    dispatch(fetchMovieCommentsRequest(endpoint));
  }, [movieId]);

  return (
    <Box m={3} p={2} border={1} className={classes.root}>
      <Typography variant="h4">{t("commentSection.title")}</Typography>
      <PostComment movieId={movieId} user={user} />
      {comments &&
        comments.results.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment.comment}
            date={comment.date}
          />
        ))}
    </Box>
  );
};

export default CommentSection;
