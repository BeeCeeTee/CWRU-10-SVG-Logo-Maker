const Shapes = require('./shapes.js');

class Square extends Shapes {
  constructor(scolor) {
    super(scolor)
  }

  render() {
    return `rect x="70" y="20" width="160" height="160" ${this.fill}`;
  }
}

module.exports = Square;