// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    // buildHTML() {
    //     return(
        
    //    ` <div class="card employee-card">
    //     <div class="card-header">
    //         <h2 class="card-title">{this.name }</h2>
    //         <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{this.role}</h3>
    //     </div>
    //     <div class="card-body">
    //         <ul class="list-group">
    //             <li class="list-group-item">ID: {this.id}</li>
    //             <li class="list-group-item">Email: <a href="mailto:{{ email }}">{this.email}</a></li>
    //             {/* <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{this.github}</a></li> */}
    //         </ul>
    //     </div>
    // </div>
    //     `);
    // }


}
module.exports = Employee;