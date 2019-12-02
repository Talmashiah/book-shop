var gBooks;

function loadData() {
    if (localStorage.getItem("Books")) {
        gBooks = loadFromStorage('Books', []);
    } else {
        createBooks();
    }
}

function createBooks() {
    gBooks = [];
    gBooks.push(createBook('The Alchemist', 69.99, 'https://images-na.ssl-images-amazon.com/images/I/51Wqj2WAlPL._SX329_BO1,204,203,200_.jpg'))
    gBooks.push(createBook('A Dance with Dragons', 54.99, 'https://images-na.ssl-images-amazon.com/images/I/510GbS-rDxL._SX323_BO1,204,203,200_.jpg'))
    gBooks.push(createBook('The Catcher in the Rye', 49.99, 'https://images-eu.ssl-images-amazon.com/images/I/51su61GeJRL.jpg'))
}

function createBook(name, price, imgUrl) {
    return {
        id: getRandomID(),
        name,
        price,
        imgUrl,
        rate: 1
    }
}

function getBooksToRender() {
    saveToStorage('Books', gBooks);
    return gBooks;
}

function getBookIndexByID(bookId) {
    return gBooks.findIndex(function (book) {
        return book.id === bookId
    })
}

function deleteBook(bookId) {
    var bookIndex = getBookIndexByID(bookId)
    gBooks.splice(bookIndex, 1);
}

function addNewBook(newName, newPrice, newImg) {
    var newBook = createBook(newName, newPrice, newImg);
    gBooks.push(newBook);
}

function updateBook(bookId, bookPrice) {
    var bookIndex = getBookIndexByID(bookId);
    gBooks[bookIndex].price = bookPrice;
}

function setNewBookRate(newRate, bookId) {
    var bookIndex = getBookIndexByID(bookId);
    gBooks[bookIndex].rate = newRate;

}

