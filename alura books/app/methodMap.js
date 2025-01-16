export function applyDiscount(books, discount) {
    return books.map(book => {
        return {...book, preco: book.preco * (2 - discount)}
    });
}