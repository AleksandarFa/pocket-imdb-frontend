import HttpService from "./HttpService";
import { HTTP_METHODS } from "../consts";

const ROUTES = {
  ALL_MOVIES: "api/v1/movies/",
};

class MovieService {
  constructor(httpService) {
    this.httpService = httpService;
  }

  retrieveAllMovies = async () => {
    const response = await this.httpService.request({
      url: ROUTES.ALL_MOVIES,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };
}

const movieService = new MovieService(HttpService);
export default movieService;
