// const {writeFile} = require ('fs');
const inquirer = require('inquirer');
const position = 'Manager';
const role = 'Intern';
function buildQuestions(role){
    const validateInt =(str) => !!parseInt(str); 
    const validateLength = (str) => !!str.length;


const questions = [
{
    type: 'input',
    name: 'name',
    message: `What is the ${role}'s name?`
},
{
    type: 'input',
    name: 'id',
    message: `What is the ${role}'s id?`,
    validate: validateInt,
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
if (role ==="Manager"){
    questions.push({
        type: 'input',
        name: 'officeNumber',
        message: `What is the ${role}'s Office Number?`,
        validate: validateInt,
     });
}
else if (role === 'Engineer'){
    questions.push({
        type: 'input',
        name: 'GitHub',
        messge: `What is the ${role}'s Github profile Name?`,
        validate: validateLength,
    });
}else if (role === 'Intern'){
    questions.push({
        type: 'input',
        name: 'school',
        message:   `What is the ${role}'s school name?`,
        validate: validateLength,
    })
}




// Creates a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('the answers are ', answers);

}
init();
};
buildQuestions(role);