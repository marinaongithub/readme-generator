// function to generate markdown for README
function generateMarkdown(data) {
  let licenceURL = `![Github license](https://img.shields.io/badge/license-${data.license}-blue)`;
  return `
  # ${data.title}
  ${licenceURL} 
  
  ## Description 
  ${data.description}
  
  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
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
