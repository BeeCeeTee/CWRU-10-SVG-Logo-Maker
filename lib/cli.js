const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const SVG = require('./svg');

class CLI {
  constructor() {
    this.text = '';
    this.tcolor = '';
    this.shape = '';
    this.scolor = '';
  }
  run() {
    return inquirer
      .prompt([
        {
            type: "input",
            message: "Enter up to three characters:",
            name: "text"
        },
        {
            type: "input",
            message: "Enter a color keyword or hexidecimal number for the text color:",
            name: "tcolor"
        },
        {
            type: "list",
            message: "Choose a shape:",
            name: "shape",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            message: "Enter a color keyword or hexidecimal number for the shape color:",
            name: "scolor"
        }
      ])
      .then((answers) => {
        console.log(answers)
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          new SVG(answers.text, answers.tcolor, answers.shape, answers.scolor).render()
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;