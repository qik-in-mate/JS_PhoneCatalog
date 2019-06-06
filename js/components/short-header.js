import BaseComponent from './base-component.js';

class ShortHeader extends BaseComponent {
  constructor(params) {
    super(params);

  }
  _render() {

    this._element.innerHTML = 'Hello, dear VISITORS!!!';
  }
}

export default ShortHeader;
