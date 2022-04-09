// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Testing](#testing)
<a name="description"/>
## Description
${data.description}
<a name="installation"/>
## Installation
${data.installation}
<a name="usage"/>
## Usage
${data.usage}
<a name="license"/>
## License
License placeholder
<a name="contributing"/>
## Contributing
${data.contributionGuidelines}
<a name="testing"/>
## Testing
${data.testing}
<a name="contact"/>
## Contact
[GitHub](github.com/${data.username})
[Email](${data.emailAddress})
`;
}

module.exports = generateMarkdown;
