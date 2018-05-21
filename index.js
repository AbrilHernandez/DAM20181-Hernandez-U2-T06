var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    //metodo publico que retorna un string
    Greeter.prototype.greet = function () {
        return "Hola, " + this.greeting + " ";
    };
    return Greeter;
}());
//instanciar
//objeto greeter es un any xD
var greeter = new Greeter("world");
console.log(greeter.greet());
