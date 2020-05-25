import axios from "axios";

const cm = '/comunication';

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI_LOCAL,
      withCredentials: true,
    });
  }

  addComunitation(body) {
      console.log(body)
    return this.apiClient.post(cm + "/add", body);
  }

}

const apiClient = new ApiClient();
export default apiClient;