export default class Vehicles{
    constructor({typeC,brand, color}){
        this.typeC = typeC;
        this._brand = brand;
        this.color = color;
    }
     


    driving(){
        console.log("I am driving a "+ this.typeC + " and its color is "+this.color);
    }

    carga(){
        console.log("My " + this.typeC + " loads : ");
    }

    // encapsulamiento
    get brand(){
        return this._brand;
    }

    set brand(newBrand){
        this._brand = newBrand;
    }
    
}


export class camioneta  extends Vehicles{
    constructor(props){
        super(props)
    }

    carga(){
        super.carga();
        return "Cattle concentrate";
    }


}

export class camionganadero extends Vehicles{
    constructor(props){
        super(props)
    }

    carga(){
        super.carga();
        return "Cows and horses";
    }
}


