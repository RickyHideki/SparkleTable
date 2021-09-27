

/* Inserir conteúdo na lista */
//Monta um objeto de um item
function montaItem(formItem) {
    var item = {
        descricao: formItem.Descricao.value,
        rd: formItem.RD.value
    };

    return item
};

//Monta uma Td para o item
function montaTd(item){
    var td = document.createElement("td");
    td.textContent = item;

    td.classList.add("tabela__item");
    td.classList.add("tabela__textos");
    td.classList.add("texto-normal");

    return td;
}

//Monta uma Tr para a Td
function montaTr(item){
    var tr = document.createElement("tr");

    tr.appendChild(montaTd(item.descricao));
    tr.appendChild(montaTd(item.rd));

    return tr;
}

/*Mensagens de Erro*/
//Verificar o erro
function validar(item){
    var erros = [];

    if(item.descricao.length == 0) erros.push("Insira uma descrição válida!");
    if(item.rd.length == 0) erros.push("Insira um valor numérico!");

    return erros;
}

//Alertar o Erro
function alertErros(erros){
    for(i = 0; i < erros.length; i++){
        alert(erros[i]);
    }
}