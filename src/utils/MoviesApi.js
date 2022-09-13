class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(`Ошибка: ${res.status}`);
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    //   credentials: "include",
    }).then(this._checkResponse);
  }
}
export const moviesApi = new MoviesApi({
  baseUrl: `https://api.nomoreparties.co`,
  headers: {
    "Content-Type": "application/json",
  },
});
