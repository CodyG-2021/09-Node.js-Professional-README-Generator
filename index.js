// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\
		- What was your motivation?\
		- Why did you build this project?\
		- What problem does it solve?\
		- What did you learn?',
	},
	{
		type: 'input',
		name: 'instructions',
		message: 'What are the steps required to install your project?\
		Provide a step-by-step description of how to get the development environment running.',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What is your usage information?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'What is your projects description?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'What is your projects description?'
	}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(`./${fileName}.md`, data)
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then(response => {
		writeToFile('README.md', generateMarkdown({...responses}))
	})
};

// Function call to initialize app
init();
