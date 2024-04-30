const Square = require('../lib/square');

describe('Square', () => {
    test('should render a square shape with the indicated color', () => {
      const shape = new Square();
      shape.setColor("blue")
      expect(shape.render).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    });
  });