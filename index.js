const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

// function to generate README
function generateREADME(answwers) {
    return `# ${answwers.title}
    
## Description
${answwers.description}

## Table of Contents
- [Installation](#installation)
- [Usuage](#usuage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answwers.installatiom}

## Usuage
${answwers.usuage}

## License
This application is covered under ${answwers.license} license.

## Contributing
${answwers.contributing}

## Tests 
${answwers.tests}

## Questions
If you have any questions or need further assistance, feel free to reach out.
- GitHub Profile: [${answwers.github}](https://github.com/afrique18/${answwers.github})
- Email: ${answwers.email}
`;
}

