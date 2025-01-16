import { getSearchAPIBooks, showBooks } from "./main.js";

let books = [];
books = await getSearchAPIBooks();
const totalPriceSection = document.getElementById('total_price_books_available');
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', applyFilterOrSort));

function applyFilterOrSort() {
    const btnElement = document.getElementById(this.id);
    let newBooks = [];
    if (btnElement.id === 'btnOrderByPrice') {
        newBooks = books.sort((a,b) => a.preco - b.preco);
    } else if (btnElement.id === 'btnAvailableBooks') {
        newBooks = books.filter(book => book.quantidade > 0);
        displayTotalPrice(newBooks);
    } else {
        const category = btnElement.value;
        newBooks = books.filter(book => book.categoria == category);
    }
    showBooks(newBooks, 0.3);
}

function displayTotalPrice(books) {
    totalPriceSection.innerHTML = `
        <div class="books__available">
            <p>Todos os livros disponíveis por R$ <span id="value">${books.reduce((acc, curr) => acc + curr.preco, 0,).toFixed(2)}</span></p>
        </div>
    `;
}