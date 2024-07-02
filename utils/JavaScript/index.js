import {
    listarProdutos10,
    pegar5Categorias,
    pegarPorCategoria
} from "./modulos/callApi.js";
import {
    criarCard,
    ulCategorias
} from "./modulos/dom.js";


window.addEventListener("load", async function () {

    try {
        let categorias = await pegar5Categorias();
        let cursos = await listarProdutos10();


        // Manipulando categorias
        categorias.forEach(categoria => {
            ulCategorias(categoria.categoriaCurso);
        });

        const lista = document.querySelector('#myList'); // Seleciona o elemento UL com o ID 'myList'
        const carrosel = document.querySelector('#carrosel'); // Seleciona o elemento UL com o ID 'carrosel'
        const children = Array.from(lista.children); // Obtém uma lista dos elementos filhos do UL



        children.forEach((element) => {
            element.addEventListener('click', async (event) => { // Adiciona um event listener de clique para cada elemento filho
                try {

                    while (carrosel.firstChild) {
                        carrosel.removeChild(carrosel.firstChild);
                    }

                    let categoryId = event.currentTarget.id;
                    console.log('ID do elemento pai clicado:', categoryId);

                    let cursoPorCategoria = await pegarPorCategoria(categoryId);
                    console.log('Cursos por categoria:', cursoPorCategoria);

                    cursoPorCategoria.forEach(curso => {
                        criarCard(curso.imgCurso, curso.descricaoCurso, curso.valorCurso, curso.criadorCurso);
                    });
                } catch (error) {
                    console.error('Erro ao carregar cursos por categoria:', error);
                }
            });
        });




        // Manipulando cursos
        cursos.forEach(curso => {
            criarCard(curso.imgCurso, curso.descricaoCurso, curso.valorCurso, curso.criadorCurso);
        });

    } catch (error) {
        console.error("Erro ao carregar cursos:", error);
        // Tratar o erro adequadamente, por exemplo, mostrar uma mensagem de erro ao usuário
    }
});

