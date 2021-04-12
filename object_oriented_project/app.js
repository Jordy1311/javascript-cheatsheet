// BOOK CONSTRUCTOR
function Book(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
}

// UI CONSTRUCTOR
function UI() {}

// add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list')
    // create tr element (book listing)
    const row = document.createElement('tr')
    // insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row)
}

// clear fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', 
    function(e) {
        // get form values
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const isbn = document.getElementById('isbn').value

        // instantiate Book
        const book = new Book(title, author, isbn)

        // instantiate UI
        const ui = new UI()

        // add book to list
        ui.addBookToList(book)

        // clear fields
        ui.clearFields()

        e.preventDefault()
    })