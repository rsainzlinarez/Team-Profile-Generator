// const {writeFile} = require ('fs');
const inquirer = require('inquirer');

// Asks initial question to determine appropriate title to ask
//to ask appropriate questions
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question(`What is the employees Position?`, position => {
    console.log(`Hey there ${position}!`);
    readline.close();
  

    const role = position;
// Function renders questions based on role(position title)
function buildQuestions(role){
    const validateInt =(str) => !!parseInt(str); 
    const validateLength = (str) => !!str.length;

// Employee information questions
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
    name: 'email',
    message: `What is ${role}'s email?`
},

];
// Adds apppropriate questions based on position title
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

// Initiates the App if any of the following requirements below are met
if (role === 'Manager' || 'Engineer' || 'Intern'){
    init()
}else{
    console.log('Enter a valid employee position title!')
    }
}

buildQuestions(role);
});