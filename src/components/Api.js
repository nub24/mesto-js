export default class Api {
  constructor ({ address, token }) {
    this._address = address;
    this._token = token;
    this._headers = {
      authorization: this._token,
      "Content-Type": "application/json"
    }
  }

  _handleResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
  };

  getUserInfo () {
    return fetch(`${this._address}/users/me`, {
      headers: this._headers
    }).then(this._handleResponse);
  }

  patchProfile ( {name, about} ) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about })
    }).then(this._handleResponse)
  }

  patchAvatar(avatar) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({avatar}),
      headers: this._headers
    })
    .then(this._handleResponse);
  }
}