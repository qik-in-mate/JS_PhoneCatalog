import phones from '../../phones/phones.js';

class PhoneService {
  static getAll() {
    return phones;
  }

  static getFiltered(query) {
    return phones.filter(phone => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
  }
  static getSortedByAlphabet() {
    return phones.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  
  static getSortedByAge() {
    return phones.sort(function(a, b) {
      return a.age - b.age;
    });
  }

  static async getPhone(id) {
    return (await import(`../../phones/${id}.js`)).default;
  }
}

export default PhoneService;
