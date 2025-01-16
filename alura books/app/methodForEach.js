const bookSection = document.getElementById('books');

export function insertBooksInSection(books) {
    bookSection.innerHTML = "";
    books.forEach(book => {
        bookSection.innerHTML += `
            <div class="book">
                <img class="book__images ${book.quantidade > 0 ? '' : 'unavailable'}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="book__title">
                    ${book.titulo}
                </h2>
                <p class="book__description">${book.autor}</p>
                <p class="book__price" id="price">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `;
    });
}
