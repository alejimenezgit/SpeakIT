import axios from "axios";

const user = '/user';

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI_LOCAL,
      withCredentials: true,
    });
  }

  whouseris() {
    return this.apiClient.get(user + "/whouseris");
  }

  getAllUsers() {
    return this.apiClient.get(`${user}/all`);
  }

  getUser(id) {
    return this.apiClient.get(`${user}/${id}`);
  }

  /*
  updateUser(body,id) {
    return this.apiClient.put(`${user}/${id}`, body);
  }
  */
}

const apiClient = new ApiClient();
export default apiClient;