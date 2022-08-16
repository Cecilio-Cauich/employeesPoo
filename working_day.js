export default class Workingday{
    constructor({startTime, endTime}){
        this.startTime = startTime;
        this.endTime = endTime;
    }

    myWorkingHours(){
        return "My work start at "+this.startTime+" and end at "+this.endTime;
    }
}

