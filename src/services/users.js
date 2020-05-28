import axios from "axios";

const user = '/user';

class ApiClient {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URI_LOCAL,
      withCredentials: true,
    });
  }

  allbyUser(body) {
    console.log(body)
    return this.apiClient.post(user + "/allbyLanguage", body);
  }

  whouseris() {
    return this.apiClient.get(user + "/whouseris");
  }

  getUserLogin(body) {
    return this.apiClient.post(`${user}/`, body);
  }

  getUserRegister(body) {
    return this.apiClient.post(`${user}/add`, body);
  }

  getAllUsers() {
    return this.apiClient.get(`${user}/all`);
  }

  logout(){
    return this.apiClient.get(`${user}//logout`);
  }

  oneUserMatches(id){
    return this.apiClient.get(`${user}/oneUserMatches/${id}`);
  }

  oneUser(id){
    return this.apiClient.get(`${user}/${id}`);
  }

  updateUser(body, id) {
    return this.apiClient.put(`${user}/update/${id}`, body);
  }
  
  pushMatch(body, id) {
    return this.apiClient.put(`${user}/pushMatch/${id}`, body);
  }

}

const apiClient = new ApiClient();
export default apiClient;