const Square = require('../lib/square');

describe('Square', () => {
  test('should render a square shape with a blue fill color', () => {
    const scolor = "blue"
    const shape = new Square(scolor);
    expect(shape.render()).toEqual('rect x="70" y="20" width="160" height="160" fill="blue"');
  });
});