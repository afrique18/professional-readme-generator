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

// Function to prompt the user for information
function promptUser() {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:', 
        },
        {
            type: 'input',
            name: 'usuage',
            message: 'Enter usuage information:', 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:', 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:', 
        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose a license for your application:', 
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub usuername:', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:', 
        },
    ]);
}

// Function to write the generated README content
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => 
    err ? console.error(err) : console.log('README.md file generated successfully!')
    );
}

