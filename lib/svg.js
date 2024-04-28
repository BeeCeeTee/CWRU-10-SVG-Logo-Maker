const Shapes = require('./shapes.js');

function generateSVG(text, tcolor, scolor) {
  const shape = new Shapes().render();

  return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 <${shape} fill="${scolor}" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${tcolor}">${text}</text>

</svg>`;
}

module.exports = { generateSVG };