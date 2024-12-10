var count = 1;
const item = document.getElementById("input-item");
const buttonSaveItem = document.getElementById("add-item");
const shopList = document.getElementById("shopping-list");

buttonSaveItem.addEventListener("click", addItem);

function addItem(evento) {
    evento.preventDefault()
    count++;

    // Item da list
    const itemList = document.createElement("li");
    const containerItemList = document.createElement("div");
    containerItemList.classList.add("item-list-container");

    // Container da list
    const containerItemName = document.createElement("div");
    containerItemName.classList.add("container-shop-name");

    addCheckbox(containerItemName);

    const itemName = document.createElement("p");
    itemName.innerText = item.value;
    containerItemName.appendChild(itemName);

    // Botões do item da list
    const containerButtons = document.createElement("div");
    addButtons(containerButtons);
    
    // Unindo os conteúdos dentro da list
    containerItemList.appendChild(containerItemName);
    containerItemList.appendChild(containerButtons);
    itemList.appendChild(containerItemList);
    shopList.appendChild(itemList);
}

function addButtons(containerButtons) {
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("item-list-button");
    const imagemDelete = document.createElement("img");
    imagemDelete.src = "img/delete.svg";
    imagemDelete.alt = "Delete";
    buttonDelete.appendChild(imagemDelete);
    containerButtons.appendChild(buttonDelete);

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("item-list-button");
    const imagemEdit = document.createElement("img");
    imagemEdit.src = "img/edit.svg";
    imagemEdit.alt = "Edit";
    buttonEdit.appendChild(imagemEdit);
    containerButtons.appendChild(buttonEdit);
}

function addCheckbox(containerItemName) {
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
    containerItemName.appendChild(checkboxDiv);
}