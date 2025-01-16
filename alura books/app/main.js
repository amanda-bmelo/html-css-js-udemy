import { applyDiscount } from "./methodMap.js";
import { insertBooksInSection } from "./methodForEach.js";

let books = [];
const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

books = await getSearchAPIBooks();
showBooks(books, 0.3);

export async function getSearchAPIBooks() {
    const response = await fetch(apiEndpoint);
    return await response.json();
}

export function showBooks(books, discount) {
    let booksForSale = applyDiscount(books, discount);
    insertBooksInSection(booksForSale);
}