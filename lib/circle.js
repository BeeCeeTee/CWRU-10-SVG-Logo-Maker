const Shapes = require('./shapes.js');

class Circle extends Shapes {
  constructor(scolor) {
    super(scolor)
  }

  render() {
    return `circle cx="150" cy="100" r="80" ${this.fill}`;
  }
}

module.exports = Circle;