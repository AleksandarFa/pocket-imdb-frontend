import HttpService from "./HttpService";
import { HTTP_METHODS } from "../consts";

import { getItem, setItem } from "../utils/localStorage";

const ROUTES = {
  ALL_MOVIES: "api/v1/movies/",
  MOVIE: "api/v1/movies/",
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
      url: ROUTES.ALL_MOVIES,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };

  retrieveMovie = async ({ id }) => {
    this.setAuthToken(getItem("token"));
    const url = `${ROUTES.MOVIE}${id}`;

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
}

const movieService = new MovieService(HttpService);
export default movieService;
