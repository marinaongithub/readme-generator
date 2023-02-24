const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(
        [
            {
                type: "input",
                message: "Enter project title:",
                name: "title",
            },
            {
                type: "input",
                message: "Enter project description:",
                name: "description",
            },
            {
                type: "checkbox",
                message: "Enter the table of content elements:",
                name: "table",
                choices: ["Usage", "License", "Contributing", "Tests", "Questions"]
            },
            {
                type: "input",
                message: "Enter installation instructions:",
                name: "installation",
            },
            {
                type: "input",
                message: "Enter usage information:",
                name: "usage",
            },
            {
                type: "list",
                message: "Enter usage information:",
                name: "license",
                choices: ["MIT", "Apache", "GPLv2", "GPLv2"]
            },
            {
                type: "input",
                message: "Enter test instructions:",
                name: "tests",
            },
        ]
    ).then((response) => {
        fs.writeFile("sampleREADME.md", JSON.stringify(response), (error) => {
            error ? console.error(error) : console.log("Success!");
    })}
    );

}

// function call to initialize program
init();
