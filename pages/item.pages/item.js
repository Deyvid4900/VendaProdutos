async function buscarCursoPorId(codigo) {
  const URL = "http://localhost:3000/curso?id=" + codigo;
  try {
    const response = await fetch(URL, {
      method: "GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const curso = await response.json();
    return curso;

  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

async function exibirCurso() {
  var queryString = window.location.search;
  queryString = queryString.substring(1);
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get('id');

  if (id) {
    let curso = await buscarCursoPorId(id);
    const categoria = document.getElementById('categoria');
    const titulo = document.getElementById('titulo');
    const descricao = document.getElementById('descricao');
    const criador = document.getElementById('criador');
    const img = document.getElementById('img');
    const preco = document.getElementById('preco');
    if (curso) {

      
      if (categoria) categoria.innerHTML = curso.categoriaCurso || 'Não disponível';
      if (titulo) titulo.innerHTML = curso.nomeCurso || 'Não disponível';
      if (descricao) descricao.innerHTML = curso.descricaoCurso || 'Não disponível';
      if (criador) criador.innerHTML = curso.criadorCurso || 'Não disponível';
      if (img) img.setAttribute('src', curso.imgCurso)   || 'Não disponível';
      if (preco) preco.innerHTML = "R$"+curso.valorCurso+',00'   || 'Não disponível';

    } else {
      console.log("Curso não encontrado.");
    }
  } else {
    console.log("ID do curso não fornecido na URL.");
  }
}

// Chamar a função assíncrona para exibir o curso
exibirCurso();