const readline = require('readline');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName, year, copyright) {
  // Generate the license section content
  const licenseContent = `
## License

This project is licensed under the ${licenseName} License - see the [LICENSE](LICENSE) file for details.

© ${year} ${copyright}
`;

  return licenseContent;
}

module.exports = {
  renderLicenseSection
};



