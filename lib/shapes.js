class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render(text, textColor) {
        // Each shape class contains the full SVG code
        // Only difference is one is a polygon, other is a rectangle, and a circle.
        // Fills in the text variables to "render"
        const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 270,200 30,200" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        return svgContent;
    }
}

class Circle extends Shape {
    render(text, textColor) {
        // Refer to line 12
        const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        return svgContent;
    }
}

class Square extends Shape {
    render(text, textColor) {
        // Refer to line 12
        const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="10" width="180" height="180" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
        return svgContent;
    }
}

module.exports = { Triangle, Circle, Square };
