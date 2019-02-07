const isNeedToAddComma = (index, array) => array.length - 1 !== index;

class Param {
  constructor(name = null, child = []) {
    this.name = name;
    this.child = child;
  }

  addAttribute(name, callback) {
    this.child.push(new Param(name));
    callback && callback(this.child[this.child.length - 1]);
    return this;
  }

  parseMeAndChild() {
    if (this.child.length > 0) {
      let myChilds = '';
      for (const [index, child] of this.child.entries()) {
        myChilds += `${child.parseMeAndChild()}${
          isNeedToAddComma(index, this.child) ? ',' : ''
        }`;
      }
      return this.name + `{${myChilds}}`;
    }
    return this.name;
  }
}

export default class QueryBuilderService {
  listOfParams = [];

  startSymbol = '{';

  endSymbol = '}';

  addParam(param, callback) {
    const createdParam = new Param(param);
    this.listOfParams.push(createdParam);
    callback && callback(this.listOfParams[this.listOfParams.length - 1]);
    return this;
  }

  build() {
    let string = `${this.startSymbol}`;
    this.listOfParams.forEach((element, index, array) => {
      string += `${element.parseMeAndChild()}${
        isNeedToAddComma(index, array) ? ',' : ''
      }`;
    });
    string += `${this.endSymbol}`;
    return string;
  }
}

// EXAMPLE OF QUERY BUILDER USAGE
// const query = new QueryBuilderService();
//
// console.log('QUERY IS: ', query
//   .addParam('firstName')
//   .addParam('lastName')
//   .addParam('middleName')
//   .addParam('car', param => {
//     param.addAttribute('number');
//     param.addAttribute('model', param => {
//       param.addAttribute('info', param => {
//         param.addAttribute('year');
//         param.addAttribute('name');
//         param.addAttribute('quality');
//       });
//     });
//     param.addAttribute('cost');
//   }));
