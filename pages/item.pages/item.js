async function buscarCursoPorId(codigo){
    const URL = "http://localhost:3000/curso?id="+ codigo;
    try {
      const response = await fetch(URL, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
  
      const curso = await response.json();
      return curso;
  
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  

var queryString = window.location.search;

queryString = queryString.substring(1);

var searchParams = new URLSearchParams(queryString);

var id = searchParams.get('id');
let item = buscarCursoPorId(id)

console.log(item.nomeCurso)