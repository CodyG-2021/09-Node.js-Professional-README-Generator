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
		message: 'What is the des of your project?'
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What is the installation of your project?',
	},
	{
		type: 'input',
		name: 'instructions',
		message: 'What is the instructions of your project?',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What is your usage information?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What licence do you want to use?',
		choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
	},
	{
		type: 'input',
		name: 'contributors',
		message: 'What contributing do you want to use?',
		
	},
	{
		type: 'input',
		name: 'tests',
		message: 'What tests do you want to use?'
	},
	{
		type: 'input',
		name: 'questions',
		message: 'What questions do you want to use?'
	},
	{
		type: 'input',
		name: 'github',
		message: 'What github do you want to use?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What email do you want to use?'
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return fs.writeFile(`${fileName}`, data), (err) => {
		err ? console.log(err) : console.log('Check out your README!');
	}
}

// TODO: Create a function to initialize app
function init() {
	inquirer
	.prompt(questions)
	.then(res => {
		writeToFile('README.md', generateMarkdown(res.data))
	})
};

// Function call to initialize app
init();
