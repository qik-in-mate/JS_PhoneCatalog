import BaseComponent from './base-component.js';
import ProductList from './product-list.js';
import Search from './search.js';
import ShoppingCart from './shopping-cart.js';
import Sort from './sort.js';
import PhoneService from '../services/phone-service.js';

class Products extends BaseComponent {
  constructor(params) {
    super(params);

    this._initComponents();
  }

  _render() {
    this._element.innerHTML = `
    <div class="row">
      <div class="col-md-2">
        <section>
          <div data-component="search"></div>
          <p data-component="sort"></p>
        </section>
        <section data-component="shopping-cart"></section>
      </div>
      <div class="col-md-10" data-component="product-list"></div>
    </div>`;
  }

  _initComponents() {
    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
      parent: this,
    });

    this._sort = new Sort({
      element: this._element.querySelector('[data-component="sort"]'),
      parent: this,
      products: PhoneService.getAll(),
    });

    this._shoppingCart = new ShoppingCart({
      element: this._element.querySelector('[data-component="shopping-cart"]'),
      parent: this,
    });

    this._productList = new ProductList({
      element: this._element.querySelector('[data-component="product-list"]'),
      products: PhoneService.getAll(),
      parent: this,
    });
  }
  searchUpdated(query) {
    this._productList.products = PhoneService.getFiltered(query);
  }
  phoneSelected(phoneId) {
    this._parent.phoneSelected(phoneId);
  }
  getSortByAlphabet() {
    this._productList.products = PhoneService.getSortedByAlphabet();
  }
  getSortByAge() {
    this._productList.products = PhoneService.getSortedByAge();
  }
  addedToCart(item) {
    this._shoppingCart.addItem(item);
  }
}

export default Products;
