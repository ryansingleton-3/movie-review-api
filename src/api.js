export default class API {
  _base = "https://63672a3bf5f549f052d12d14.mockapi.io/api";

  async get(path) {
    let response = await fetch(this._base + path, {
      method: "GET",
    });

    return response;
  }

  async post(path, data) {
    let response = await fetch(this._base + path, {
      method: "POST",
      body: data,
    });

    return response;
  }

  async put(path, data) {
    let response = await fetch(this._base + path, {
      method: "PUT",
      body: data,
    });

    return response;
  }

  async delete(path) {
    let response = await fetch(this._base + path, {
      method: "DELETE",
    });

    return response;
  }
}
