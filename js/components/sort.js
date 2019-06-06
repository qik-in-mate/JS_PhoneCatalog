import BaseComponent from './base-component.js';

class Sort extends BaseComponent {
  constructor(params) {
    super(params);

    this._parent = params.parent;
  }
  _render() {
    this._element.innerHTML = `
      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
        </p>
    `;

    this.addSortListener();
  }

  addSortListener() {
  
    this._element.querySelector('select')
      .addEventListener('change', (event) => {
        if (event.currentTarget.value === 'name') {
          console.log(`sorted by ${event.currentTarget.value}`);
          this._parent.getSortByAlphabet();
        } else if (event.currentTarget.value === 'age') {
          console.log(`sorted by ${event.currentTarget.value}`);
          this._parent.getSortByAge();
        }
      }
    );       
  }
}

export default Sort;
