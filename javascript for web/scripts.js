var count = 1;
const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    count++;

    // Item da lista
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    // Container da lista
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    adicionarCheckbox(containerNomeDoItem);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    // Botões do item da lista
    const containerBotoes = document.createElement("div");
    adicionarBotoes(containerBotoes);
    
    // Unindo os conteúdos dentro da lista
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
}

function adicionarBotoes(containerBotoes) {
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);
}

function adicionarCheckbox(containerNomeDoItem) {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-container");
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.for = `checkbox-${count}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${count}`;
    checkbox.classList.add("checkbox-input");

    checkboxLabel.appendChild(checkbox);
    checkboxDiv.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(checkboxDiv);
}