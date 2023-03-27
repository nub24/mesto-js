(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._errorClass=e.errorClass,this._inputErrorClass=e.inputErrorClass,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var n,r;return n=t,(r=[{key:"_showInputError",value:function(t,e,n){t.classList.add(this._inputErrorClass),e.textContent=n,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t,e){t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t,e){t.validity.valid?this._hideInputError(t,e):this._showInputError(t,e,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._submitButton.setAttribute("disabled",""):this._submitButton.removeAttribute("disabled","")}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))})),this._inputs.forEach((function(e){e.addEventListener("input",(function(n){var r=t._form.querySelector(".".concat(e.name,"-error"));t._checkInputValidity(e,r),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){return t.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e.addItem(t)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}const l=function(){function t(e,n,r){var o,i,u,a=this,l=e.name,s=e.link,f=e.likes;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,u=function(){a._handleCardClick({name:a._name,link:a._link})},(i=c(i="_handlePopupOpen"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._name=l,this._link=s,this._likesLength=f.length,this._cardTemplate=n,this._handleCardClick=r}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_setLike",value:function(){this.classList.toggle("card__button-like_active")}},{key:"_deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",this._handlePopupOpen),this._card.querySelector(".card__button-delete").addEventListener("click",(function(){return t._deleteCard()})),this._card.querySelector(".card__button-like").addEventListener("click",this._setLike)}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._cardImage=this._card.querySelector(".card__photo"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._card.querySelector(".card__title").textContent=this._name,this._likeCount=this._card.querySelector(".card__like-count"),this._likeCount.textContent=this._likesLength,this._setEventListeners(),this._card}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var h=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),p(this,"_handleOverlayClose",(function(t){t.target.classList.contains("popup")&&n.close()})),this._popup=e,this._popupButtonClose=this._popup.querySelector(".popup__button-close")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_active")}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._handleOverlayClose),this._popupButtonClose.addEventListener("click",(function(){return t.close()}))}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popup.querySelector(".popup__photo"),e._caption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;b(_(u.prototype),"open",this).call(this),this._popupPhoto.src=n,this._popupPhoto.alt=e,this._caption.textContent=e}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,P(r.key),r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}function P(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}(this,t)});function u(t,e){var n,r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=j(n=i.call(this,t)),a=function(t){n._onSubmitForm(t,n._getInputValues())},(o=P(o="_onSubmitHandler"))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._onSubmitForm=e,n._popupForm=n._popup.querySelector(".popup__form"),n._submitButton=n._popup.querySelector(".popup__button-save"),n._inputs=Array.from(n._popupForm.querySelectorAll(".popup__input")),n}return e=u,n=[{key:"_getInputValues",value:function(){return this._inputs.reduce((function(t,e){return t[e.name]=e.value,t}),{})}},{key:"setEventListeners",value:function(){k(O(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._onSubmitHandler)}},{key:"loadingButton",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение данных...";this._submitButton.disabled=t,this._submitButton.textContent=e}},{key:"open",value:function(t){k(O(u.prototype),"open",this).call(this),t&&this._inputs.forEach((function(e){e.value=t[e.name]||"";var n=new Event("input");e.dispatchEvent(n)}))}},{key:"close",value:function(){this._popupForm.reset(),k(O(u.prototype),"close",this).call(this)}}],n&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(h);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=n,this._userInfo=r,this._avatar=o,this._userId=""}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userInfo.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._userName.textContent=e,this._userInfo.textContent=n,this._avatar.src=r,this._userId=o}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,R(r.key),r)}}function R(t){var e=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===q(e)?e:String(e)}var A=function(){function t(e){var n,r,o,i=e.address,u=e.token;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))},(r=R(r="_handleResponse"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._address=i,this._token=u,this._headers={authorization:this._token,"Content-Type":"application/json"}}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"postCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:n})}).then(this._handleResponse)}},{key:"patchProfile",value:function(t){var e=t.name,n=t.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:n})}).then(this._handleResponse)}},{key:"patchAvatar",value:function(t){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",body:JSON.stringify({avatar:t}),headers:this._headers}).then(this._handleResponse)}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),x=document.querySelector(".cards"),U=document.querySelector(".popup_type_view"),D={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",errorClass:"popup__input-error_visible",inputErrorClass:"popup__input_type_error"},N=document.querySelector(".popup_type_avatar"),F=document.querySelector(".profile__photo"),V=document.querySelector(".profile__avatar-container"),H=document.querySelector(".popup_type_add"),J=document.querySelector(".profile__button-add"),M=document.querySelector(".profile__title"),z=document.querySelector(".profile__subtitle"),$=document.querySelector(".popup_type_edit"),G=document.querySelector(".profile__button-edit"),K=Array.from(document.querySelectorAll(".popup__form"));function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new A({address:"https://mesto.nomoreparties.co/v1/cohort-63",token:"6a95f001-9add-456c-b850-9575114e6ce8"});Promise.all([W.getUserInfo(),W.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];et.setUserInfo(o),nt.renderItems(i.reverse())})).catch((function(t){return console.log("Ошибка получения данных: ".concat(t))}));var X=new S(U);X.setEventListeners();var Y=new C(H,(function(t,e){t.preventDefault(),W.postCard(e).then((function(t){nt.addItem(t),Y.close()})).catch((function(t){return console.log("Ошибка при добавлении карточки: ".concat(t))}))}));Y.setEventListeners();var Z=new C($,(function(t,e){t.preventDefault(),Z.loadingButton(!0),W.patchProfile(e).then((function(t){et.setUserInfo(t),Z.close()})).catch((function(t){return console.log("Ошибка редактирования профиля: ".concat(t))})).finally((function(){Z.loadingButton(!1,"Сохранить")}))}));Z.setEventListeners();var tt=new C(N,(function(t,e){var n=e.avatar;t.preventDefault(),tt.loadingButton(!0),W.patchAvatar(n).then((function(t){et.setUserInfo(t),tt.close()})).catch((function(t){return console.log("Ошибка изменения аватара: ".concat(t))})).finally((function(){tt.loadingButton(!1)}))}));tt.setEventListeners();var et=new T({name:M,about:z,avatar:F}),nt=new i({renderer:function(t){return function(t){return new l(t,"#card-template",(function(){X.open(t)})).createCard()}(t)}},x);K.forEach((function(t){new n(D,t).enableValidation()})),G.addEventListener("click",(function(){Z.open(et.getUserInfo())})),J.addEventListener("click",(function(){Y.open()})),V.addEventListener("click",(function(){return tt.open()}))})();