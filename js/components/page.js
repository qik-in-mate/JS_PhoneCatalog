import BaseComponent from './base-component.js';
import ProductItem from './product-item.js';
import Products from './products.js';
import PhoneService from '../services/phone-service.js';
import ShortHeader from './short-header.js';

class Page extends BaseComponent {
  constructor(params) {
    super(params);

    this._initComponents();
  }

  _render() {
    this._element.innerHTML = `
      <div class="container-fluid">
        <div class="header"></div>
        <div data-component="products"></div>
        <div hidden class="row" data-component="product-item"></div>
      </div>
    `;
  } 

  _initComponents() {
    this._products = new Products({
      element: this._element.querySelector('[data-component="products"]'),
      parent: this,
    });

    this._productItem = new ProductItem({
      element: this._element.querySelector('[data-component="product-item"]'),
      parent: this,
    });
    this._shortHeader = new ShortHeader({
      element: this._element.querySelector('div.header'),
      parent: this,
    });
  }

  async phoneSelected(phoneId) {
    this._products.hide();
    this._productItem.show();

    this._productItem.item = await PhoneService.getPhone(phoneId);
  }

  phoneDeselected() {
    this._products.show();
    this._productItem.hide();
  }

  addedToCart(item) {
    this._products.addedToCart(item);
  }
}

export default Page;
