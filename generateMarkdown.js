// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (data.license) {
		case 'Apache 2.0':
		//something
			break;
		case 'BSD 2-Clause':
		//something
			break;
		case 'BSD 3-Clause':
		//something
			break;
		case 'LGPL-3.0':
		//something
			break;
		case 'MIT':
		//something
			break;
		case 'Mozilla Public 2.0':
		//something
			break;
		case 'CDDL-1.0':
		//something
			break;
		case 'EPL-2.0':
		//something
			break;
		default:
			break;
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${questions.description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

## Usage

## Credits

## License
`
}

module.exports = generateMarkdown;



