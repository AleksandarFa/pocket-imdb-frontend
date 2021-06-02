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
    Object.assign(this.client.defaults.headers.common, headers);
  };

  toggleBaseURL = () => {
    this.client.defaults.baseURL =
      this.client.defaults.baseURL != config.apiOMDB.baseURL
        ? config.apiOMDB.baseURL
        : config.api.baseURL;
  };

  removeHeader = (header) => {
    delete this.client.defaults.headers.common[header];
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

  toggleBaseURL = () => {
    this.httpClient.toggleBaseURL();
  };

  removeHeader = (header) => {
    this.httpClient.removeHeader(header);
  };
}

const httpService = new HttpService(new HttpClient());

export default httpService;
