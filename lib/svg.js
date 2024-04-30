const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

let newShape = '';

class SVG {
  constructor(text, tcolor, shape, scolor) {
    this.text = text,
    this.tcolor = tcolor,
    this.shape = shape,
    this.scolor = scolor
  }
  
  render() {if (this.shape === "circle") {
    newShape = new Circle(this.scolor).render();
  }
  if (this.shape === "triangle") {
    newShape = new Triangle(this.scolor).render();
  }
  if (this.shape === "square") {
    newShape = new Square(this.scolor).render();
  }
  console.log(newShape);
  console.log(this.shape);
  
  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <${newShape}/>

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolor}">${this.text}</text>

</svg>`;
}}

module.exports = SVG;