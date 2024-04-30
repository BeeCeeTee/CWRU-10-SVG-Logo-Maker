const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  test('should render a triangle shape with a blue fill color', () => {
    const scolor = "blue"
    const shape = new Triangle(scolor);
    expect(shape.render()).toEqual('polygon points="150, 18 244, 182 56, 182" fill="blue"');
  });
});