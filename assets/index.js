// TODO: Include packages needed for this application
const inquirer = require(inquirer)
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate: user_input => {
      if (user_input) {
        return true;
      } else{
        console.log('Please input a project name');
        return false;
      }
    },
  },
  {
    type: 'input', 
    message: 'Describe what your project is about.',
    name: 'description',
    validate: user_description => {
      if (user_description){ 
        return true;
      }else{ 
        console.log('Please put a description of your project please');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'open an integrated terminal and type "npm install"',
    name: 'installation',
    validate: user_install => { 
      if (user_install){
        return true;
      } else {
        console.log('Make sure the most recent version of node.js is installed and vs code is installed as well')
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What is the usage of this project?',
    name: 'usage',
    validate: User_usage =>{
    if (User_usage) {
      return true;
    } else {
      console.log('Please describe the usage of the project.');
      return false;
    }
  }
  },
  {
    type: 'input',
    message: 'What were your contributions to this project?',
    name: 'contributions',
    validate: user_contribution => {
      if (user_contribution){
        return true;
    } else {
      console.log('Please list what you contributed');
      return false;
    }
    }
  },
  {
    type: 'input',
    message: 'Please enter your Github username',
    name:'github',
    validate: user_github => {
      if (user_github){
        return true;
      } else {
        console.log('Please enter your github username');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    message: 'Choose the license you want',
    name: 'license',
    choices: [
      'Mozilla Public License',
      'Apache License',
      'MIT License',
      'Boost Software License',
      'The Unlicense',
      'GNU AGPLv3',
    ],
  validate: user_license => {
    if (user_license){
      return true;
    } else {
      console.log('Please choose a valid license');
      return false;
    }
  }
  },
  {
    type: 'input',
    message: 'What is your plan to test the project?',
    name: 'test',
    validate: user_test => {
      if (user_test){
        return true;
      } else {
        console.log('Please explain how you plan to test the project');
        return false; 
      }
    }
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('sucess! your README file has been summoned into existense!');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) 
  .then (function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput);
  });
}

// Function call to initialize app
init();
