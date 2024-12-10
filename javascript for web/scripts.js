let count = 1;
const item = document.getElementById("input-item");
const buttonSaveItem = document.getElementById("add-item");
const shopList = document.getElementById("shopping-list");
const purchasedList = document.getElementById("purchased-list");

buttonSaveItem.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault()
    count++;

    // Item da lista
    const itemList = document.createElement("li");
    const containerItemList = document.createElement("div");
    containerItemList.classList.add("item-list-container");

    // Container da lista
    const containerItemName = document.createElement("div");
    containerItemName.classList.add("container-shop-name");

    addCheckbox(containerItemName, itemList);

    const itemName = document.createElement("p");
    itemName.innerText = item.value;
    containerItemName.appendChild(itemName);

    // Botões do item da lista
    const containerButtons = document.createElement("div");
    addButtons(containerButtons);
    
    // Data e horário do item adicionado
    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("en", { weekday: "long" })} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("en", { hour: "numeric", minute: "numeric" })}`;
    itemData.classList.add("item-time");

    // Unindo os conteúdos dentro da lista
    containerItemList.appendChild(containerItemName);
    containerItemList.appendChild(containerButtons);

    itemList.appendChild(containerItemList);
    itemList.appendChild(itemData);
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

function addCheckbox(containerItemName, itemList) {
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-container");
    
    const checkboxLabel = document.createElement("label");
    const checkboxId = `checkbox-${count}`;
    checkboxLabel.for = checkboxId;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.classList.add("checkbox-input");

    checkboxLabel.appendChild(checkbox);
    checkboxDiv.appendChild(checkboxLabel);
    containerItemName.appendChild(checkboxDiv);

    checkboxLabel.addEventListener("click", function(event) {
        if (checkbox.checked) {
            purchasedList.appendChild(itemList);
        } else {
            shopList.appendChild(itemList);
        }
    })
}