import { baseMainUrl } from '../constants/constants.js'

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

class MainApi {
  constructor(config) {
    this._headers = config.headers;
    this._baseUrl = config.baseUrl;
    this._id = config._id;
  }

  _getJwt() {
    return localStorage.getItem('jwt');
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }

  setUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleResponse);
  }

  saveMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify(data),
    }).then(handleResponse);
  }

  unsaveMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: baseMainUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;