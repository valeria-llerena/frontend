export default class Api {
  static get(URL) {
    return fetch(URL, { method: "GET" });
  }

  static getWithCredentials(URL, jwt) {
    return fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  static post(URL, data) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  static postWithOnlyCredentials(URL, jwt) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  static put(URL, data) {
    return fetch(URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
