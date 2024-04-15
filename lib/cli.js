// Imported required packages
const inquirer = require("inquirer");
const SVG = require("./svg");
const { Triangle, Square, Circle } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
        .prompt([
            {
                name: "shapeChoice",
                type: "list",
                message: "Select the logo shape you would like to use",
                choices: ["triangle", "square", "circle"],
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter the color you would like your shape to be",
            },
            {
                name: "text",
                type: "input",
                message: "Enter logo text. (Can't be more than 3 characters.)",
                validate: (text) => text.length <= 3 || "The message must be 3 characters or less",
            },
            {
                name: "changeColor",
                type: "input",
                message: "Enter the color you would like your text to be",
            },
        ])
        .then(({shapeChoice, shapeColor, text, changeColor }) => {
            let shape;
            switch (shapeChoice) {
                case "triangle":
                    shape = new Triangle();
                    break;

                case "square":
                    shape = new Square();
                    break;

                default:
                    shape = new Circle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, changeColor);
            svg.setShape(shape);
            return writeFile("logo.svg", svg.render());
        })
        .then(() => {
            console.log("Generated logo.svg");
        })
        .catch(() => {
            console.log(error);
            console.log("Oops ! Let's see what happened.");
        });
    }
}

module.exports = CLI;