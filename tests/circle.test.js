const Circle = require('../lib/circle');

describe('Circle', () => {
  test('should render a circle shape with a blue fill color', () => {
    const scolor = "blue"
    const shape = new Circle(scolor);
    expect(shape.render()).toEqual('circle cx="150" cy="100" r="80" fill="blue"');
  });
});