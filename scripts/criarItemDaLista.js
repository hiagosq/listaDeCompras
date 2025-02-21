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
    console.log(containerItemDaLista);


    const diaDaSemana = new Date().toLocaleDateString("pt-BR",{

        weekday: "long", 
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR",{

        hour: "numeric",
        minute: "numeric"
    });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");

    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
 }