export default class Employees{
    constructor({name, age, whatIdo = {}, workingDay = {}}){
        this.name = name;
        this.age = age;
        this.whatIdo = whatIdo;
        this.workingDay = workingDay;
    }

    whoAmI(){ //Quien es
         return "My name is "+this.name + " and I am " + this.age + " years old";
    }

}