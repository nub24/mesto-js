'use strict';

export default class UserInfo {
  constructor ({ name, about, avatar }) {
    this._userName = name;
    this._userInfo = about;
    this._avatar = avatar;
  }

  getUserInfo () {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent
    }
  }

  setUserInfo ( {name, about, avatar} ) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this._avatar.src = avatar;
  }
}