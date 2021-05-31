import HttpService from "./HttpService";
import { HTTP_METHODS } from "../consts";

import { getItem, setItem } from "../utils/localStorage";

export const ROUTES = {
  COMMENTS: "api/v1/comments/",
};

class CommentService {
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

  fetchMovieComments = async (url, page) => {
    const endpoint = !page ? `${ROUTES.COMMENTS}${url}` : url;

    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: endpoint,
      method: HTTP_METHODS.GET,
    });
    return response.data;
  };

  postMovieComment = async (data) => {
    this.setAuthToken(getItem("token"));
    const response = await this.httpService.request({
      url: ROUTES.COMMENTS,
      method: HTTP_METHODS.POST,
      data: data,
    });
    return response.data;
  };
}

const commentService = new CommentService(HttpService);
export default commentService;
