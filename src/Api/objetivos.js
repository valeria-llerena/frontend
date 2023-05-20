import Api from "./Api";
import { BASE_URL } from "./urls";

export default class ObjetivosService {
  static async getObjetivos() {
    try {
      const loginRsp = await Api.get(`${BASE_URL}api/objetivos`);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getObjetivosById(id) {
    try {
      const loginRsp = await Api.get(`${BASE_URL}api/objetivos/${id}`);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async postNewObjetivos(data) {
    try {
      const loginRsp = await Api.post(`${BASE_URL}api/objetivos`, data);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
