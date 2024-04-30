const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    test('should render a triangle shape with the indicated color', () => {
      const shape = new Triangle();
      shape.setColor("blue")
      expect(shape.render).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });