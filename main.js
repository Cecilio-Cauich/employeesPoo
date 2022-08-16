import Workingday from "./working_day.js";
import {Jobs, homegardener, woodgardener} from "./job.js";
import {camioneta, camionganadero} from "./vehicles.js";
import Employees from "./employees.js";

//jorndas laborales

const wd_Morning = new Workingday({
    startTime: "06:00",
    endTime: "12:00"
});

const wd_Afternoon = new Workingday({
    startTime: "14:00",
    endTime: "18:00"
})

const wd_Night = new Workingday({
    startTime: "19:00",
    endTime: "05:00"
})

//empleos

const caballerango = new Jobs({
    name : "Caballerango",
    description: "Me ocupo de todo lo que tenga que ver con la atención a caballos"
});

const vaquero = new Jobs({
    name : "Vaquero",
    description : "Me ocupo de manejo de ganados en corrales y potreros"
})

const jardineroCas = new homegardener({
    name : "Jardinero de casa",
    description : "Me ocupo de la limpieza del jardin de la hacienda"
});

// console.log(jardineroCas.myjob());
// console.log(jardineroCas.gettingtools());

const jardineroPotre = new woodgardener({
    name : "Jardinero de potreros",
    description : "Me ocupo de darle mantenimiento a los potreros"
});

// console.log("--------------------------------------------");

// console.log(jardineroPotre.myjob());
// console.log(jardineroPotre.gettingtools());

// vehiculos
const truck1 = new camionganadero({
    typeC : "Camion ganadero",
    brand : "Ford",
    color : "Negro"
})

const truck2 = new camioneta({
    typeC : "Camioneta doble cabina",
    brand : "Chevrolet",
    color : "Blanco"
})

//empleado

const jose = new Employees({
    name : "Jose",
    age : 27,
    whatIdo : caballerango,
    workingDay : wd_Morning,
    myVehicle : truck1,
});

// console.log(jose)
console.log(jose.whoAmI());
console.log(jose.whatIdo.myjob())
console.log(jose.workingDay.myWorkingHours())
console.log(jose.myVehicle.driving());
console.log(jose.myVehicle.carga());
