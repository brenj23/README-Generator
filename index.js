// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project',
    },
    {
        type:'input',
        name: 'howToUse',
        message: 'Enter a quick how to use description',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Enter sources you would like to credit for the project',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter URL for screenshot of project'
    }

];

function promptUser() {
    return inquirer.prompt(questions);
}

function generateREADME(answers){
    const readmeContent = `
    # ${answers.projectTitle}
    
    ## Description
    ${answers.description}
    
    ## How to Use
    ${answers.howToUse}

    ## Credit
    ${answers.credit}

    ## Screenshot
    ${answers.screenshot}

    ## License

    ## Questions
    contact me here: broussard.j.bren@gmail.com
    or find my github at: https://github.com/brenj23
    
    
    `;
    
      return readmeContent;
}

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile('README.md', content, err => {
        if(err) {
            console.error('Error writing README:', err);
        } else {
            console.log('README.md file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const readmeContent = generateREADME(answers);
        writeToFile(readmeContent);
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// Function call to initialize app
init();
