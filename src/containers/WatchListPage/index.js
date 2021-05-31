import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/headerDashboard";
import WatchList from "./watchList";
import { fetchWatchListRequest } from "../../store/movies/actions";
import { makeSelectWatchList } from "../../store/movies/selectors";
import { ROUTES } from "../../services/movieService";

const WatchListPage = () => {
  const dispatch = useDispatch();
  const watchList = useSelector(makeSelectWatchList());

  useEffect(() => {
    dispatch(fetchWatchListRequest(ROUTES.WATCHLIST));
  }, []);

  return (
    <div>
      <Header />
      {watchList && <WatchList movies={watchList} />}
    </div>
  );
};

export default WatchListPage;
