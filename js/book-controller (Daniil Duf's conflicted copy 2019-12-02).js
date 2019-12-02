

function init(){
    createBooks();
    renderBooks();
    
}

function renderBooks(){
    var books = getBooksToRender();
    var rows = books.map(function(book) {
        return `<tr class="data-row"> 
        <td>${book.id}</td> 
        <td>${book.name}</td> 
        <td>${book.price}$</td>
        <td><button class="read-btn">Read</button></td>
        <td><button class="update-btn">Update</button></td>
        <td><button class="delete-btn" onclick="onDeleteBook()">Delete</button></td> 
        </tr>`
    })

    document.querySelector('.books-table').innerHTML = rows.join('');
}
