// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions 
inquirer.prompt(
    
    {
        type: 'input',
        message = 'Enter project title'
        name: 'title',
        // validate property to check that the user provided a value 
        validate: (value) =>{
            if (value){
                return true
            } else {
                return 'Please enter a valid title'
                
            }
        }
    }
    
)