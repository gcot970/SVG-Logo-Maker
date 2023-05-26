const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// LogoGenerator class
class LogoGenerator {
    constructor() {
        // initializing shapes
        this.shapes = {
            Triangle: new Triangle(),
            Circle: new Circle(),
            Square: new Square(),
        };
    }

    // writeToFile
    writeToFile(fileName, data) {
        fs.appendFile(fileName, `${data}\n`, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        );
    }

    // The "main code"
    init() {
        // Asking user prompts
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
                // Creates new shape
                const shape = this.shapes[data.shape];
                // Sets shape color
                shape.setColor(data.shapeColor);
                // "Renders" text over the shape
                const svgContent = shape.render(data.text, data.textColor);
                // Begins writing to the file
                this.writeToFile('logo.svg', svgContent);
            });
    }
}

// Creates a new instance of LogoGenerator
const logoGenerator = new LogoGenerator();
// Starts the "main" code
logoGenerator.init();
