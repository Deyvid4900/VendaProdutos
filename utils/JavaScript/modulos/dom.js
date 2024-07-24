export const criarCard = (imagem, desc, valor, criador,mediaAvaliacao,id) => {
    // Criação do elemento <div> principal com a classe "card" e estilo "width: 400px"
    const carrosel = document.getElementById('carrosel')
    // Criando os elementos HTML
    const divCard = document.createElement('div');
    divCard.classList.add('course-card');
    divCard.setAttribute('data-purpose', 'container');

    const divImage = document.createElement('div');
    divImage.classList.add('course-card-image');
    const img = document.createElement('img');
    img.setAttribute('src', imagem);
    img.setAttribute('alt', '');
    img.setAttribute('style', 'width:-webkit-fill-available;;');
    img.setAttribute('loading', 'lazy');
    divImage.appendChild(img);

    const divContent = document.createElement('div');
    divContent.classList.add('course-card-content');

    const divTitle = document.createElement('div');
    divTitle.classList.add('course-card-title');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.setAttribute('href', '/pages/item.pages/item.html?id='+id);
    a.textContent = desc;
    h3.appendChild(a);
    divTitle.appendChild(h3);

    const divInstructor = document.createElement('div');
    divInstructor.classList.add('course-card-instructor');
    divInstructor.textContent = 'Instrutor: ';
    const spanInstructor = document.createElement('span');
    spanInstructor.textContent = criador;
    divInstructor.appendChild(spanInstructor);

    const divRatings = document.createElement('div');
    divRatings.classList.add('course-card-ratings');
    const spanRating = document.createElement('span');
    spanRating.classList.add('star-rating');
    spanRating.textContent = 'Classificação: ';
    const spanRatingValue = document.createElement('span');
    spanRatingValue.textContent = mediaAvaliacao;
    spanRating.appendChild(spanRatingValue);
    spanRating.textContent += ' (9571 avaliações)';
    divRatings.appendChild(spanRating);

    const divPrice = document.createElement('div');
    divPrice.classList.add('course-card-price');
    divPrice.textContent = 'Preço atual: ';
    const spanPrice = document.createElement('span');
    spanPrice.textContent = 'R$' + valor;
    divPrice.appendChild(spanPrice);

    // Montando a estrutura do card
    divContent.appendChild(divTitle);
    divContent.appendChild(divInstructor);
    divContent.appendChild(divRatings);
    divContent.appendChild(divPrice);

    divCard.appendChild(divImage);
    divCard.appendChild(divContent);


    carrosel.appendChild(divCard);

}

export const criarCardMelhores = (imagem, desc, valor, criador,mediaAvaliacao,id) => {
    // Criação do elemento <div> principal com a classe "card" e estilo "width: 400px"
    const carrosel = document.getElementById('carroselMelhores')
    // Criando os elementos HTML
    const divCard = document.createElement('div');
    divCard.classList.add('course-card');
    divCard.setAttribute('data-purpose', 'container');

    const divImage = document.createElement('div');
    divImage.classList.add('course-card-image');
    const img = document.createElement('img');
    img.setAttribute('src', imagem);
    img.setAttribute('alt', '');
    img.setAttribute('', 'auto');
    img.setAttribute('loading', 'lazy');
    divImage.appendChild(img);

    const divContent = document.createElement('div');
    divContent.classList.add('course-card-content');

    const divTitle = document.createElement('div');
    divTitle.classList.add('course-card-title');
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.setAttribute('href',  '/pages/item.pages/item.html?id='+id);
    a.textContent = desc;
    h3.appendChild(a);
    divTitle.appendChild(h3);

    const divInstructor = document.createElement('div');
    divInstructor.classList.add('course-card-instructor');
    divInstructor.textContent = 'Instrutor: ';
    const spanInstructor = document.createElement('span');
    spanInstructor.textContent = criador;
    divInstructor.appendChild(spanInstructor);

    const divRatings = document.createElement('div');
    divRatings.classList.add('course-card-ratings');
    const spanRating = document.createElement('span');
    spanRating.classList.add('star-rating');
    spanRating.textContent = 'Classificação: ';
    const spanRatingValue = document.createElement('span');
    spanRatingValue.textContent = mediaAvaliacao;
    spanRating.appendChild(spanRatingValue);
    spanRating.textContent += ' (9571 avaliações)';
    divRatings.appendChild(spanRating);

    const divPrice = document.createElement('div');
    divPrice.classList.add('course-card-price');
    divPrice.textContent = 'Preço atual: ';
    const spanPrice = document.createElement('span');
    spanPrice.textContent = 'R$' + valor;
    divPrice.appendChild(spanPrice);

    // Montando a estrutura do card
    divContent.appendChild(divTitle);
    divContent.appendChild(divInstructor);
    divContent.appendChild(divRatings);
    divContent.appendChild(divPrice);

    divCard.appendChild(divImage);
    divCard.appendChild(divContent);


    carrosel.appendChild(divCard);

}

export const ulCategorias = (categoria) => {
    // Array com os textos dos itens da lista

    // Seleciona o elemento UL onde os itens serão adicionados
    var ulElement = document.getElementById('myList');
    ulElement.setAttribute('class','flex-wrap d-flex gap-5')
    



    var liElement = document.createElement('li'); // Cria um elemento LI
    liElement.setAttribute('style','cursor:pointer')
    var aElement = document.createElement('a');
    aElement.innerHTML = categoria; // Define o texto do LI
    liElement.id = categoria;
    
    liElement.appendChild(aElement)


    ulElement.appendChild(liElement); // Adiciona o LI como filho do UL
    
}