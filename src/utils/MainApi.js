class MainApi {
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

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  createUser(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ email, password, name }),
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse);
  }

  updateUser({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: "include",
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: movie.country ? movie.country : "Empty",
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN ? movie.nameEN : "Empty",
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id ? movie.id : '-',
      }),
    })
      .then(this._checkResponse)
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  }

  deleteMovieFromSaved(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._getResponseData);
  }
}

export const mainApi = new MainApi({
  baseUrl: `${window.location.protocol}${
    process.env.REACT_APP_API_URL || "//localhost:3002"
  }`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
