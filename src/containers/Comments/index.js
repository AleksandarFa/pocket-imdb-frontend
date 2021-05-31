import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchMovieCommentsRequest } from "../../store/comments/actions";
import { makeSelectComments } from "../../store/comments/selectors";
import Comment from "./comment";
import PostComment from "./commentForm";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
  },
  showMoreBtn: {
    width: "25%",
    margin: 24,
  },
});

const CommentSection = ({ movieId, user }) => {
  const dispatch = useDispatch();
  const comments = useSelector(makeSelectComments());
  const classes = useStyles();
  const [t, i18n] = useTranslation("translation");

  useEffect(() => {
    const endpoint = `?movie=${movieId.id}`;
    dispatch(fetchMovieCommentsRequest(endpoint, false));
  }, [movieId]);

  const handleShowMore = () => {
    comments.next && dispatch(fetchMovieCommentsRequest(comments.next, true));
  };

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
      {comments && comments.next && (
        <Button
          variant="outlined"
          color="primary"
          className={classes.showMoreBtn}
          onClick={handleShowMore}
        >
          {t("commentSection.showMoreBtn")}
        </Button>
      )}
    </Box>
  );
};

export default CommentSection;
