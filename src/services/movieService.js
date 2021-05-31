import HttpService from "./HttpService";
import { HTTP_METHODS } from "../consts";

import { getItem, setItem } from "../utils/localStorage";

export const ROUTES = {
  MOVIES: "api/v1/movies/",
  GENRES: "api/v1/genres/",
  LIKES: "api/v1/likes/",
  POPULAR: "api/v1/movies/popular/",
  WATCHLIST: "api/v1/movies/watch_list/",
};

class MovieService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  setAuthToken = (token) => {
    if (token) {
      setItem("token", token);

      this.httpService.attachHeaders({
        Authorization: `Bearer ${token}`,
      });
    }
  };

  retrieveAllMovies = async () => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: ROUTES.MOVIES,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };

  retrieveMovie = async ({ id }) => {
    this.setAuthToken(getItem("token"));
    const url = `${ROUTES.MOVIES}${id}`;

    const response = await this.httpService.request({
      url: url,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };

  fetchPage = async ({ url }) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: url,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };

  setLike = async (like) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: ROUTES.LIKES,
      method: HTTP_METHODS.POST,
      data: like,
    });
    return response.data;
  };

  watchListManipulation = async (url, method, data) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url,
      method,
      data,
    });
    return response.data;
  };
}

const movieService = new MovieService(HttpService);
export default movieService;
