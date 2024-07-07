async function statusServidor(){
    const URL = "http://localhost:3000";
  
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain',
        }
      });
  
      const resposta = await response.text();
      // console.log(resposta);
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  statusServidor();
  
 export async function listarProdutos(){
    const URL = "http://localhost:3000/cursos";
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const produtos = await response.json();
      // console.log(produtos);
      return produtos;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  export async function listarMelhores(){
    const URL = "http://localhost:3000/cursos/melhores";
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const produtos = await response.json();
      // console.log(produtos);
      return produtos;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }

  export async function listarProdutos10(){
    const URL = "http://localhost:3000/cursos/10";
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const produtos = await response.json();
      // console.log(produtos);
      return produtos;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  export async function pegar5Categorias(){
    const URL = "http://localhost:3000/categoria5";
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const produtos = await response.json();
      // console.log(produtos);
      return produtos;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }

  export async function pegarPorCategoria(categoria){
    const URL = "http://localhost:3000/categoria?categoriaCurso="+categoria;
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const produtos = await response.json();
      // console.log(produtos);
      return produtos;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }

//   async function buscarProdutoPorId(codigo){
//     const URL = "http://localhost:3000/produto?id="+ codigo;
//     try {
//       const response = await fetch(URL, {
//         method: "GET",
//         mode: 'cors',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'application/json',
//         }
//       });
  
//       const produto = await response.json();
//       return produto;
  
//     } catch (error) {
//       console.error("Ocorreu um erro:", error);
//     }
//   }
  
//   async function salvar(produto){
//     const URL = "http://localhost:3000";
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         mode: 'cors',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(produto),
//       });
  
//       const novoProduto = await response.json();
//       return novoProduto;
  
//     }catch (error) {
//       console.error("Ocorreu um erro:", error);
//     }
//   }
  
//   async function atualizar(codigo, produto){
//     const URL = "http://localhost:3000/"+ codigo;
//     try {
//       const response = await fetch(URL, {
//         method: "PUT",
//         mode: 'cors',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(produto),
//       });
  
//       const produtoAterado = await response.json();
//       return produtoAterado;
  
//     }catch (error) {
//       console.error("Ocorreu um erro:", error);
//     }
//   }
  
//   async function excluir(codigo){
//     const URL = "http://localhost:3000/"+ codigo;
  
//     const response = await fetch(URL, {
//       method: "DELETE",
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       }
//     });
  
//     console.log(response);
  
//     if (response.ok) {
//       return true;
//     }else{
//       return false;
//     }
//   }
  
//   const getTableBody = document.querySelector('tbody');
//   async function createTr() {
//     const produtos = await listarProdutos();
  
//     //Percorre a lista de produtos e
//     //cria as linnhas da tabela
//     const tr = produtos.map((produto) => {
//       return `<tr>
//           <td>${produto.id}</td>  
//           <td>${produto.nome}</td>  
//           <td>${produto.tipo}</td>
//           <td>${produto.preco}</td>
//           <td>
//             <button type="button" class="btn btn-secondary btn-sm" onclick="editar(${produto.id})">
//               <i class="bi bi-pencil-square"></i>
//             </button>
//             <button type="button" class="btn btn-danger btn-sm" onclick="deletar(${produto.id})">
//               <i class="bi bi-trash"></i>
//             </button>
//           </td>  
//         </tr>`
//     }).join('');
//     getTableBody.innerHTML = tr;
//   }
  
//   //Obtem as referencias dos formulários
//   const form = document.getElementById("formulario");
//   const nomeIdentificador = document.getElementById("codigo");
//   const descForm = document.getElementById("descricao");
//   const marcaForm = document.getElementById("marca");
//   const valorForm = document.getElementById("valor");
  
//   function registrar(){
//     const id = nomeIdentificador.value;
  
//     //Veririca o tipo da operação 
//     //se será cadastrar um novo registro
//     //ou alterar um registro existente
//     if(id == "" || id == "0"){
//       cadastrar();
//     }else{
//       alterar();
//     }
//   }
  
//   async function cadastrar() {
//     const produto = {
//       id: 0, //O id será gerado pelo back-end
//       nome: descForm.value,
//       tipo: marcaForm.value,
//       preco: valorForm.value
//     }
  
//     const novoProduto = await salvar(produto);
//     console.log(novoProduto);
  
//     //Atualizar os dados da tabela
//     createTr();
  
//     //Limpa o formulário
//     form.reset();
//   }
  
//   async function alterar() {
//     const produto = {
//       id: nomeIdentificador.value,
//       nome: descForm.value,
//       tipo: marcaForm.value,
//       preco: valorForm.value
//     }
  
//     console.log(produto);
  
//     const produtoAlterado = await atualizar(produto.id, produto);
//     console.log(produtoAlterado);
  
//     //Atualizar os dados da tabela
//     createTr();
  
//     //Limpa o formulário
//     form.reset();
//   }
  
//   async function editar(codigo) {
//     const produto = await buscarProdutoPorId(codigo);
//     console.log(produto);
  
//     nomeIdentificador.value = produto.id;
//     descForm.value = produto.nome;
//     marcaForm.value = produto.tipo;
//     valorForm.value = produto.preco;
//   };
  
//   async function deletar(id) {
//     const status = await excluir(id);
  
//     if(status){
//       console.log("Registro excluído com sucesso");
//     }else{
//       console.log("Falha ao excluir o registro");
//     }
  
//     //Atualizar os dados da tabela
//     createTr();
//   };