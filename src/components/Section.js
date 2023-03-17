'use strict';

export default class Section {
  constructor ({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  addItem (item) {
    this._container.prepend(this._renderer(item));
  }

  renderItems (items) {
    items.forEach(item => {
      this.addItem(item);
    })
  }
}