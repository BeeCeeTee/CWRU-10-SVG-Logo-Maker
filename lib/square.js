const Shapes = require('./shapes.js');

class Square extends Shapes {
  render() {
    return `rect x="70" y="20" width="160" height="160"`;
  }
}

module.exports = Square;