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
    {
        //list of license
        type: 'list',
        message = 'Enter licenses used',
        name: 'License',
        choices:['The MIT License', 'The GPL License', 'Apache license', 'GNU License', 'N/A'],
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
        message = 'Enter Github username',
        name: 'git',
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
        message = 'Enter your email',
        name: 'email',
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid input'
            }
        }
    }
    
]

    