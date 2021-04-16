// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case 'Apache 2.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'BSD 2-Clause':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'BSD 3-Clause':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'LGPL-3.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'MIT':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'Mozilla Public 2.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'CDDL-1.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		case 'EPL-2.0':
			badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
			break;
		default:
			badge = '';
			break;
	};
	return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
// 	return(
// 		!license
// 		? ''
// 		: renderLicenseBadge(license)
// 	);
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
	return(
	!license 
	? '' 
	: renderLicenseBadge(license)
		// renderLicenseLink(license)
	);
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributors
${data.tests}

## Questions
${data.questions}
`
}

module.exports = generateMarkdown;



