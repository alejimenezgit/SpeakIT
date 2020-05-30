import axios from "axios";

const lan = '/language';

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI_LOCAL,
      withCredentials: true,
    });
  }

  allLanguages() {
    return this.apiClient.get(lan + "/all");
  }
}

const apiClient = new ApiClient();
export default apiClient;