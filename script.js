import verificarListaVazia from "./scripts/verificarListaVazia.js";
import {criarItemDaLista} from "./scripts/criarItemDaLista.js";

const listaDeCompras = document.getElementById('lista_de_compras');


const botaoAdicionar = document.getElementById("adicionar_item");
botaoAdicionar.addEventListener('click', (evento) =>{

    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);

    verificarListaVazia(listaDeCompras);
});

    verificarListaVazia(listaDeCompras);

    