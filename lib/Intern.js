// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(){
        this.school = "UCLA";
        this.role = "Intern";

    }


getSchool(){
    return this.school;
}
getRole(){
    return this.role;
}

}
module.exports = Intern;