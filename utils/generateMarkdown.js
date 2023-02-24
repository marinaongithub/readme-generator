// function to generate markdown for README
function generateMarkdown(data) {
  const licenceURL = `![Github license](https://img.shields.io/badge/license-${data.license}-blue)`;
  return `
  # ${data.title}
  ${licenceURL} 
  
  ## Description 
  ${data.description}
  
  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license} 

  ## Contributing
  ${data.contributing} 

  ## Tests
  ${data.tests} 

  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
