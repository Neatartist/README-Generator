
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return [];
}


// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return[];
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.license}
  ## Contribution:
  ${data.contributions}
  ## Testing:
  ${data.test}
  ## Contact Info:
    - Github: [${data.github}]
`;
}

module.exports = generateMarkdown;
