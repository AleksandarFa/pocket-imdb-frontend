import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeSelectUser } from "../store/auth/selectors";
import { postLikeRequest } from "../store/movies/actions";

import { IconButton } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";

const LikeButton = ({ likeDislike, movie_id }) => {
  const dispatch = useDispatch();
  const user = useSelector(makeSelectUser());
  const like = user ? { liked: null, movie: movie_id, user: user.id } : null;

  const handleLike = (e, value) => {
    like.liked = !!e.currentTarget.value;
    dispatch(postLikeRequest(like));
  };

  return (
    <IconButton onClick={handleLike} value={likeDislike ? true : null}>
      {likeDislike ? <ThumbUpAltIcon /> : <ThumbDownAltIcon />}
    </IconButton>
  );
};

export default LikeButton;
