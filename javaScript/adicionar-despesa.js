var botaoAdicionarDespesa = document.querySelector("#buttonDespesa");
botaoAdicionarDespesa.addEventListener("click", function(){
    event.preventDefault();

    var formDespesas = document.querySelector("#formDespesa");
    var tabelaDespesas = document.querySelector("#tabelaDespesas");
    var despesasTotal = document.querySelector("#despesasTotal");

    var itensDespesas = montaItem(formDespesas);

    var erros = validar(itensDespesas);
    if(erros.length > 0){
        alertErros(erros);
        return;
    }

    var despesasSoma = calcularRDCompleto(itensDespesas, DespesaArray);
    despesasTotal.textContent = "R$" + despesasSoma;

    var trDespesas = montaTr(itensDespesas);
    tabelaDespesas.appendChild(trDespesas);

    formDespesas.reset()
});