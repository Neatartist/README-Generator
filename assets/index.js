// TODO: Include packages needed for this application
const inquirer = require(inquirer)
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
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
      console.log('please describe the usage of the project.');
      return false;
    }
  }
  },
  {
    type: 'input',
    message: 'what were your contributions to this project?',
    name: 'contributions',
    validate: user_contribution => {
      if (user_contribution){
        return true;
    } else {
      console.log('Please list what you contributed');
      return false;
    }
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
