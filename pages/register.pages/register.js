const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    async function criarConta(data) {
        const URL = "http://localhost:3000/user-controller/Usuario";
        try {
            const response = await fetch(URL, {
                method: "POST",
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const novoUsuario = await response.json();
            return novoUsuario;


            

        } catch (error) {
            console.error("Ocorreu um erro:", error);
        }
    
    }
    criarConta(data)
});