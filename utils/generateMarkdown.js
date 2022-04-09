// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "ISC":
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GPL":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "BSD":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "None":
            return "";
        default:
            return "";
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
    let licenseBadge = renderLicenseBadge(data.license);
    return `# ${data.title}
${licenseBadge}
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
