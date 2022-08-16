export default class Employees{
    constructor({name, age, whatIdo, workingDay, myVehicle}){
        this.name = name;
        this.age = age;
        this.whatIdo = whatIdo;
        this.workingDay = workingDay;
        this.myVehicle = myVehicle;
    }

    whoAmI(){ //Quien es
         return "My name is "+this.name + " and I am " + this.age + " years old";
    }

}