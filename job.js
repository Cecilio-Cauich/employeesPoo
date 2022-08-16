export class Jobs{
    constructor({name, description}){
        this.name = name;
        this.description = description;
    }

    myjob(){
        return "My jobs is "+this.name+" and what I do is "+this.description;
    }

}

//El jardinero puede ser de la casa o de los potreros donde comen los aniamales.
//Se aplicó herencia y polimorfismo

class gardener extends Jobs{
    constructor(props){
        super(props)
    }

    gettingtools(){ //Hay un mensaje generico luego dependiendo que tipo de gardener será
                    //las herramientas que solicitará
        console.log("I need my tools: ")
    }

}

export class homegardener  extends gardener{
    constructor(props){
        super(props);
    }

    gettingtools(){ 
        super.gettingtools(); //con super llamamos el método de la clase madre para que también se ejecute
        return "I need a gardener's scissors and a wheelbarrow" //procede con el mensaje único de esta clase
    }
}

export class woodgardener  extends gardener{
    constructor(props){
        super(props);
    }

    gettingtools(){
        super.gettingtools();
        console.log("I need a machete")
    }
}