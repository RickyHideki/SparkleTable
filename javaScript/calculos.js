var ReceitaArray = [];
var DespesaArray = [];

var saldotexto = document.querySelector("#saldo");

function calcularRDCompleto(item, array){
    var RDInt = parseInt(item.rd);
    array.push(RDInt)
    
    var RDtotal = calcularRD(array);

    calcularSaldo();

    return RDtotal;
}

function calcularRD(array){
    var RDtotal = 0;
    for(i = 0; i < array.length; i++){
        RDtotal = RDtotal + array[i];
    }

    return RDtotal;
};

function calcularSaldo(){
    var ReceitaTotal = calcularRD(ReceitaArray);
    var DespesaTotal = calcularRD(DespesaArray);
    var Saldo = ReceitaTotal - DespesaTotal;
    saldotexto.textContent = "R$" + Saldo;
}