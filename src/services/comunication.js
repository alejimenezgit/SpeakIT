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
    return this.apiClient.post(cm + "/add", body);
  }

  allComunicationByIds(id){
    return this.apiClient.get(cm + `/allByIds/${id}`);
  }

  update(id, body){
    return this.apiClient.put(`${cm}/update/${id}`, body);
  }

}

const apiClient = new ApiClient();
export default apiClient;