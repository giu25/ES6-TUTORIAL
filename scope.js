var a = 10;

function b(){
    console.log(a*c);
}
var c=2;
b();

person = {
    name : "Giuseppe",
    surname : "Coluzzi",
    greet: function(){

        var self = this;
        console.log("Ciao "+self.name+" "+self.surname); // stampa Ciao Giuseppe Coluzzi

        var altraFunzione = function(){
            return self.surname+"!!!";
        }
        console.log(altraFunzione()); // stampa Coluzzi!!!
    }
}
person.greet();