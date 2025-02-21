import {criarItemDaLista} from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById('lista_de_compras');


const botaoAdicionar = document.getElementById("adicionar_item");
botaoAdicionar.addEventListener('click', (evento) =>{

    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();

});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

    function verificarListaVazia(){
        const itemDaLista = listaDeCompras.querySelectorAll("li");

        if (itemDaLista.length === 0){
            mensagemListaVazia.style.display = "block";
        }
        else {
            mensagemListaVazia.style.display = "none";
        }
    }
    verificarListaVazia();

    