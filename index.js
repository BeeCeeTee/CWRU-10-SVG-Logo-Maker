const shapes = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');
const fs = require('fs');
const inquirer = require('inquirer');

const prompts = [
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
    ];

    function writeToFile(data) {
        const svgContent = generateSVG(data);

        fs.writeFile('logo.svg', svgContent, (err) => 
        err ? console.log(err) : console.log('logo.svg generated.'))
    }

    function init() {
        inquirer.prompt(prompts)
        .then((data) => {
            writeToFile(data);
        })
    }

    init();