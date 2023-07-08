import { BASE_MAIN_URL } from '../constants/constants.js'

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

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(handleResponse);
  };

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(handleResponse);
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
    }).then(handleResponse);
  }

  setUser(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {...this._headers, "Authorization" : `Bearer ${this._getJwt()}`},
      body: JSON.stringify({
        name: name,
        email: email,
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
  baseUrl: BASE_MAIN_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;