

function init(){
    loadData()
    renderBooks();
}

function renderBooks(){
    var books = getBooksToRender();
    var rows = books.map(function(book) {
        return `<tr class="data-row"> 
        <td>${book.id}</td> 
        <td class="min-td">${book.name}</td> 
        <td>${book.price}$</td>
        <td><button class="read-btn" onclick="onReadBook('${book.name}','${book.price}','${book.imgUrl}','${book.rate}','${book.id}')">Read</button></td>
        <td><button class="update-btn" onclick="readAndUpdateBook('${book.id}')">Update</button></td>
        <td><button class="delete-btn" onclick="onDeleteBook('${book.id}')">Delete</button></td> 
        </tr>`
    })

    document.querySelector('.books-table').innerHTML = rows.join('');
}

function onCloseModal(){
    document.querySelector('.read-book-modal').hidden = true;
}

function onReadBook(bookName,bookPrice,bookImg,bookRate,bookId){
    var elReadBookModal = document.querySelector('.read-book-modal');
    elReadBookModal.hidden = false;
    var strHTML = 
    `<span class="close" onclick="onCloseModal()">x</span>
    <h1>${bookName}</h1>
    <h2>${bookPrice}$</h2>
    <img src="${bookImg}" alt="${bookName}" height="250px">
    <input type="number" class="add-rate" placeholder="Rate: ${bookRate}" min="1" max="10">
    <button onclick="onAddRate('${bookId}')" class="add-rate-btn">Add</button>`;

    document.querySelector('.read-book-modal').innerHTML = strHTML;
}

function readAndUpdateBook(bookId){
    var bookPrice = +prompt('Please enter a new price');
    updateBook(bookId, bookPrice);
    renderBooks();
}

function onDeleteBook(bookId){
    deleteBook(bookId);
    renderBooks();
}

function onReadAndAddNewBook(){
    var elAddBookModal = document.querySelector('.add-book-modal');
    elAddBookModal.hidden = false;
}

function onAddBook(){
    var newName = document.querySelector('.add-name').value;
    var newPrice = document.querySelector('.add-price').value;
    var newImg = document.querySelector('.add-img').value;
    addNewBook(newName,newPrice,newImg);
    renderBooks();
    var elAddBookModal = document.querySelector('.add-book-modal');
    elAddBookModal.hidden = true;
}

function onAddRate(bookId){
    var newRate = document.querySelector('.add-rate').value;
    setNewBookRate(newRate,bookId);
    renderBooks();
    document.querySelector('.read-book-modal').hidden = true;
}