import Api from "./Api";
import { BASE_URL } from "./urls";

export default class PersonaService {
  static async loginPersona(data) {
    try {
      const loginRsp = await Api.post(`${BASE_URL}api/persona/login`, data);
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }

  static async getResponsable(dni) {
    try {
      const loginRsp = await Api.get(
        `${BASE_URL}api/persona/responsable/${dni}`
      );
      const loginRspJson = await loginRsp.json();

      return loginRspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
