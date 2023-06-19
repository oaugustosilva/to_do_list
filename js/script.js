let i = 0;


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
    itemText.id = "tasktext"
    itemText.textContent = capitalizeFirstLetter(textInput.value)+";"; // Colocando o texto digitado como valor no item

    //Criando o botão de excluir
    var botaoExclusao = document.createElement("button");
    botaoExclusao.className = "deleteButton";
    botaoExclusao.textContent = "x"
    botaoExclusao.id = "close-btn" + i;


    // Colocando o texto e o checkbox no item
    newItem.appendChild(checkboxIcon);
    newItem.appendChild(itemText);
    newItem.appendChild(botaoExclusao);
    newItem.id = "item" + i;
    i = i+1;
    console.log("Valor de i: " + i);
  

    // Criando um item na lista com as características do li
    itemList.appendChild(newItem);

    //Criando a rotina para poder marcar o checkbox clicando na palavra (label)
    itemText.addEventListener('click', function(){
        console.log("A palavra foi clicada.");
        checkboxIcon.checked = !checkboxIcon.checked;
    });

    textInput.value = ""; // Limpar o campo de entrada após adicionar o item
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// document.addEventListener('DOMContentLoaded', function() {
//     let palavraElemento = document.querySelector('#tasktext');
//     palavraElemento.addEventListener('click', function() {
//       // Ação a ser executada quando a palavra for clicada
//       console.log('A palavra foi clicada!');
//     });
// });


function closeItem() {

}