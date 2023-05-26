function createText(text, textColor) {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
}

function createShape(shape, shapeColor) {
    switch (shape) {
        case "Circle":
            return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        case "Square":
            return `<rect x="60" y="10" width="180" height="180" fill="${shapeColor}" />`;
        case "Triangle":
            return `<polygon points="150,20 270,200 30,200" fill="${shapeColor}" />`;
    }
}

function generateSVG(data) {
    const shape = createShape(data.shape, data.shapeColor);
    const text = createText(data.text, data.textColor);
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">` + shape + text + `</svg>`;
}

module.exports = generateSVG;
