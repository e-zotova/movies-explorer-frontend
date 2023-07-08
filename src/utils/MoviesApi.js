import { BASE_MOVIES_URL } from '../constants/constants.js'

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

class MoviesApi {
  constructor(config) {
    this._headers = config.headers;
    this._baseUrl = config.baseUrl;
    this._id = config._id;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: { ...this._headers },
    }).then(handleResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BASE_MOVIES_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default moviesApi;
