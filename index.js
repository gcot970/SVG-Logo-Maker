const fs = require('fs');
const genSVG = require('./utils/generateSVG');
const inquirer = require('inquirer');

function writeToFile(fileName, data) {
    fs.appendFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter three characters:',
                validate: function (input) {
                    if (input.length === 3) {
                        return true;
                    } else {
                        return 'Please enter exactly three characters.';
                    }
                },
            },
            {
                type: 'input',
                message: 'Enter a color (hex or name) for text:',
                name: 'textColor',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Select an option:',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            {
                type: 'input',
                message: 'Enter a color (hex or name) for shape:',
                name: 'shapeColor',
            },
        ])
        .then((data) => {
            writeToFile('logo.svg', genSVG(data));
        });
}

init();