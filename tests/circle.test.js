const Circle = require('../lib/circle');

describe('Circle', () => {
    test('should render a circle shape with the indicated color', () => {
      const shape = new Circle();
      shape.setColor("blue")
      expect(shape.render).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });