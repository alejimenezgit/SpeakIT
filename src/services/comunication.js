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
    console.log(id)
    return this.apiClient.get(cm + `/allByIds/${id}`);
  }

}

const apiClient = new ApiClient();
export default apiClient;