// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
	{
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
		- What did you learn?'
	},
	{
		type: 'input',
		name: 'tableOfContents',
		message: ''
	},
	{
		type: 'input',
		name: 'installation',
		message: '',
	},
	{
		type: 'input',
		name: 'instructions',
		message: '',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What is your usage information?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What lisence do you want to use?',
	},
	{
		type: 'input',
		name: 'contributing',
		message: '',
		choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0']
	},
	{
		type: 'input',
		name: 'tests',
		message: ''
	},
	{
		type: 'input',
		name: 'questions',
		message: ''
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(`./${fileName}.md`, data)
}

// TODO: Create a function to initialize app
function init() {
	inquirer
	.prompt(questions)
	.then(res => {
		writeToFile('README.md', generateMarkdown({...responses}))
	})
};

// Function call to initialize app
init();
