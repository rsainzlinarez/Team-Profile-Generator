const {writeFile} = require ('fs');
const inquirer = require ('inquirer');

const questions = [
{
    type: 'input',
    name: 'name',
    message: `What is the ${role}'s name?`
},
{
    type: 'input',
    name: 'title',
    message: `What is ${role}'s title?`
},
{
    type: 'input',
    name: 'email',
    message: `What is ${role}'s email?`
},

];

