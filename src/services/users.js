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

  getUserLogin(body) {
    console.log('body',body)
    return this.apiClient.post(`${user}/`, body);
  }

  getUserRegister(body) {
    console.log('body',body)
    return this.apiClient.post(`${user}/add`, body);
  }

  getAllUsers() {
    return this.apiClient.get(`${user}/all`);
  }

  logout(){
    return this.apiClient.get(`${user}//logout`);
  }

  oneUser(id){
    return this.apiClient.get(`${user}/${id}`);
  }

  updateUser(body, id) {
    console.log(body, id)
    return this.apiClient.put(`${user}/update/${id}`, body);
  }

}

const apiClient = new ApiClient();
export default apiClient;