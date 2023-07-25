// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    // creates an input for the user to name their project
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
    // creates an input to describe what the project is 
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
    // creates an input to describe how you install the generator
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
    // creates an input for the user to describe the usage for their project
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
    // creates an input for the user to put their contributions 
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
    // creates the input for the user to put their github username 
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
    // this creates the question for the license which is a checkbox
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
    // creates the input when the user selects their license
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
    // creates the input for the user to describe how they will test their project
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
// creates a function to write the README
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('sucess! your README file has been summoned into existense!');
  });
}

// TODO: Create a function to initialize app
// initializes the app
function init() {
  inquirer.prompt(questions) 
  .then (function (userInput) {
      console.log(userInput)
      writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
