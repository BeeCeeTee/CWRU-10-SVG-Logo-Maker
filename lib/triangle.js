const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  constructor(scolor) {
    super(scolor)
  }

  render() {
    return `polygon points="150, 18 244, 182 56, 182" ${this.fill}`;
  }
}

module.exports = Triangle;