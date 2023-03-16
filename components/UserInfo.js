export default class UserInfo {
  constructor ({ user, userInfo }) {
    this._userName = user;
    this._userInfo = userInfo;
  }

  getUserInfo () {
    return {
      user: this._userName.textContent,
      userInfo: this._userInfo.textContent
    }
  }

  setUserInfo ( userData ) {
    this._userName.textContent = userData.user;
    this._userInfo.textContent = userData.userInfo;
  }

}