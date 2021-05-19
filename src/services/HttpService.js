import axios from "axios";

import config from "../config";

class HttpClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.api.baseURL,
    });
  }

  request = (requestConfig) => {
    return this.client(requestConfig);
  };

  attachHeaders = (headers) => {
    Object.assign(this.client.defaults.headers, headers);
  };
}

class HttpService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  request = (requestConfig) => {
    return this.httpClient.request(requestConfig);
  };

  attachHeaders = (headers) => {
    this.httpClient.attachHeaders(headers);
  };
}

const httpService = new HttpService(new HttpClient());

export default httpService;
