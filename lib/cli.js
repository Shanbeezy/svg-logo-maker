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
    }
}