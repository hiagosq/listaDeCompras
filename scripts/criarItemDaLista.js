import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input_item");
let contador = 0;
 
export function criarItemDaLista(){    //lógica da função
    console.log(inputItem.value);

    if(inputItem.value === ""){
        alert('Por favor, insira um item!');
        return;
    }
    const itemDaLista = document.createElement('li');
    const containerItemDaLista = document.createElement('div');
    containerItemDaLista.classList.add('lista_item_container');
    const inputCheckBox = document.createElement('input');
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = 'checkbox'+contador++;
    const nomeItem = document.createElement('p');
    nomeItem.innerHTML = inputItem.value;

    inputCheckBox.addEventListener ("click", function(){
        if (inputCheckBox.checked){
            nomeItem.style.textDecoration = "line-through";
        }
        else{
            nomeItem.style.textDecoration = "none";
        }


    });

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");

    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
 }