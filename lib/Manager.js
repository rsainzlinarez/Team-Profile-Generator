// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager{
    constructor(name,id,email,officeNumber) {
        // const testValue= 100;
        this.officeNumber = officeNumber;
        this.role = "Manager";

    }


getOfficeNumber(){
        return this.officeNumber;
    }

getRole(){
    return this.role;
}

}

module.exports = Manager;