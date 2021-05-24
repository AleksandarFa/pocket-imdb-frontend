import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { makeSelectNextMovie } from "../../store/movies/selectors";
import { makeSelectPreviousMovie } from "../../store/movies/selectors";
import { fetchPageOfMoviesRequest } from "../../store/movies/actions";

const Pagination = () => {
  const next = useSelector(makeSelectNextMovie());
  const previous = useSelector(makeSelectPreviousMovie());
  const dispatch = useDispatch();

  const handleClick = (url) => {
    if (url) {
      dispatch(fetchPageOfMoviesRequest(url));
    }
  };

  return (
    <ButtonGroup variant="contained" color="primary">
      <Button
        onClick={() => handleClick(previous)}
        disabled={!Boolean(previous)}
      >
        {" "}
        &lt;
      </Button>
      <Button onClick={() => handleClick(next)} disabled={!Boolean(next)}>
        {" "}
        &gt;
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
