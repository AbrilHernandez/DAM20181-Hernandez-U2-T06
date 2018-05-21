class Greeter{
    private greeting: string;
    constructor(message:string){
        this.greeting=message;
    }
    //metodo publico que retorna un string
    greet():string{
        return `Hola, ${this.greeting} `;
    }
}
//instanciar
//objeto greeter es un any xD
let greeter = new Greeter("world");
console.log(greeter.greet());