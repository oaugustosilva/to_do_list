
function addItemToList() {
    var textInput = document.getElementById("textInput"); //Captação do que foi escrito
    var itemList = document.getElementById("itemList"); //Captação da lista
    var newItem = document.createElement("li"); //Criação do novo item da lista

    // Criando o input com o checkbox
    var checkboxIcon = document.createElement("input");
    checkboxIcon.type = "checkbox";
    checkboxIcon.id = "myCheckbox";


    // Criando o label onde vai escrito o texto
    var itemText = document.createElement("label");
    itemText.textContent = textInput.value; // Colocando o texto digitado como valor no item

    // Colocando o texto e o checkbox no item
    newItem.appendChild(checkboxIcon);
    newItem.appendChild(itemText);
  

    // Criando um item na lista com as características do li
    itemList.appendChild(newItem);

    textInput.value = ""; // Limpar o campo de entrada após adicionar o item
}