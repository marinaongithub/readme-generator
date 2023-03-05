const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        error ? console.error(error) : console.log("Generating README file...");
    });
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
                validate: (input) => {
                    if (!input) {
                        return "Please enter project title!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "Write a short description of the project:",
                name: "description",
                validate: (input) => {
                    if (!input) {
                        return "Please enter project description!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "What are the steps required to install your project?",
                name: "installation",
                validate: (input) => {
                    if (!input) {
                        return "Please enter project installation steps!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "Provide instructions and examples for use:",
                name: "usage",
                validate: (input) => {
                    if (!input) {
                        return "Please enter project intructions for use!";
                    }
                    return true;
                }
            },
            {
                type: "list",
                message: "Select one of the following licences:",
                name: "license",
                choices: ["MIT", "Apache", "GPLv2", "GPLv3"],
            },
            {
                type: "input",
                message: "What are the guidelines for the user to contribute to the project?",
                name: "contributing",
                validate: (input) => {
                    if (!input) {
                        return "Please enter guidelines for contributing!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "Write tests for your application:",
                name: "tests",
                validate: (input) => {
                    if (!input) {
                        return "Please enter project tests!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "Where should the user address their questions about the project?",
                name: "questions",
                validate: (input) => {
                    if (!input) {
                        return "Please enter contact details for use questions!";
                    }
                    return true;
                }
            },
        ]
    ).then((response) => writeToFile("sampleREADME.md", response))
}

// function call to initialize program
init();
