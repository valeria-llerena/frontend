import Api from "./Api";
import { BASE_URL } from "./urls";

export default class ProgresoService {
  static async getProgresos() {
    try {
      const loginRsp = await Api.get(`${BASE_URL}api/progreso`);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async getProgresosByIdObjetivos(id) {
    try {
      const loginRsp = await Api.get(`${BASE_URL}api/progreso/${id}`);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
  static async postNewProgreso(data) {
    try {
      const loginRsp = await Api.post(`${BASE_URL}api/progreso`, data);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }

  static async updateProgreso(data) {
    try {
      const loginRsp = await Api.put(`${BASE_URL}api/progreso/status`, data);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
