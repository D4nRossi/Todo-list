//Variaveis
const addButton = document.querySelector('.addButton');
const container = document.querySelector('.container');
var input = document.querySelector('.input');


//Construtor
class item{
    constructor(itemName){
        //Criar o item da div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDITAR";
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVER";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener("click", () => this.edit(input));
        removeButton.addEventListener("click", () => this.remove(itemBox));
    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
}

function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener("click", check);
window.addEventListener('keydown', (e) => {
    if(e.wich == 13){
        check();
    }
});