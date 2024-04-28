const Shapes = require('./shapes.js');

class Triangle extends Shapes {
  render() {
    return `polygon points="150,20 245,180 55,180"`;
  }
}

module.exports = Triangle;