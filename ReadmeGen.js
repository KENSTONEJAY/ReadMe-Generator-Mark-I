// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions 
inquirer.prompt([
    
    {
        type: 'input',
        message="Enter project title",
        name: 'title',
        // validate property to check that the user provided a value 
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid input'
                
            }
        }
    },
    {
        type: 'input',
        message = 'Briefly describe your app',
        name: 'description',
        // validate property to check that the user provided a value 
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid input'
                
            }
        }
    },
    {
        type: 'input',
        message = 'Enter resources and/or technologies used',
        name: 'installation',
        // validate property to check that the user provided a value 
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid input'
                
            }
        }
    },
    {
        type: 'input',
        message = 'Enter usage instructions',
        name: 'usage',
        // validate property to check that the user provided a value 
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid input'
            }
        }
    },
    