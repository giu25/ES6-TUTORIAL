class Automobile {
    constructor(targa,modello){
        this.targa=targa;
        this.modello=modello;
    }
    faiPieno(){
        this.pieno=true;
    }
    stampa(){
        return "La macchina" + this.modello + "ha il pieno" + this.pieno;
    }
}

//definito un prototipo Casa
class Casa { 
    contructor(categoria,mq){
        this.categoria=categoria;
        this.mq=mq;
    }
    setPrezzoMq(prezzoMq){
        this.prezzoMq=prezzoMq;
    }
    calcolaPrezzo(){
        return this.prezzo*this.mq;
    }
}

let topaia = new Casa("Z",10);
let attico = new Casa("A",200);

topaia.setPrezzo(1);
attico.setPrezzo(1000);

console.log(topaia.calcolaPrezzo());
console.log(attico.calcolaPrezzo());

class Ufficio extends Casa{
    contructor(mq, tipoAgi){
        super(mq,"UFF");
        this.tipoAgi=tipoAgi;
    }

    daiAgibilita(tipoAgi){
        this.tipoAgi=tipoAgi;
    }

    stampa(){
        return "L' ufficio con "+this.mq+ "mq e' di tipo " + this.tipoAgi;
    }
}

var studioLegale = new Ufficio(130, "Commerciale");
console.log(studioLegale.stampa());

