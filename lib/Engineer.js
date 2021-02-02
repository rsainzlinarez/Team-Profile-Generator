// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// const Employee = require("./Employee");

class Engineer{
    constructor() {
     
     this.github = "GitHubUser";
     this.role = "Engineer";
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }




    // buildHTML() {
    //     return(
    //     <div class="card employee-card">
    //     <div class="card-header">
    //         <h2 class="card-title">{{ name }}</h2>
    //         <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    //     </div>
    //     <div class="card-body">
    //         <ul class="list-group">
    //             <li class="list-group-item">ID: {{ id }}</li>
    //             <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
    //             <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
    //         </ul>
    //     </div>
    // </div>
    //     )
    // }


}
module.exports = Engineer;