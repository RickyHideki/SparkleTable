var botaoAdicionarReceita = document.querySelector("#buttonReceita");
botaoAdicionarReceita.addEventListener("click", function(event){
    event.preventDefault();

    var formReceita = document.querySelector("#formReceita");
    var tabelaReceita = document.querySelector("#tabelaReceita");
    var receitasTotal = document.querySelector("#receitasTotal");

    var itensReceita = montaItem(formReceita)

    var erros = validar(itensReceita);
    if(erros.length > 0){
        alertErros(erros);
        return;
    }

    var ReceitaSoma = calcularRDCompleto(itensReceita, ReceitaArray);
    receitasTotal.textContent = "R$" + ReceitaSoma;

    var trReceita = montaTr(itensReceita);
    tabelaReceita.appendChild(trReceita);

    formReceita.reset();
})