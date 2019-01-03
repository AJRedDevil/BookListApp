const Headers = ['title', 'author', 'isbn'];

// Book Class: Represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: 'The BareFoot Investor',
        author: 'Scott Page',
        isbn: '123'
      }, {
        title: 'The One Thing',
        author: 'Gary Keller and Jay Papasan',
        isbn: '456'
      }, {
        title: 'Shoe Dog',
        author: 'Phil Knight',
        isbn: '789'
      }
    ];

    const books = storedBooks;

    books.forEach(book => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;
    list.appendChild(row);

  }

  static clearFields() {
    for (let header of Headers) {
      document
        .querySelector(`#${header}`)
        .value = '';
    }
  }
}

// Store Class: Handles Storage
class Store {}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document
  .querySelector('#book-form')
  .addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

    // Get form values
    const title = document
      .querySelector('#title')
      .value;
    const author = document
      .querySelector('#author')
      .value;
    const isbn = document
      .querySelector('#isbn')
      .value;

    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Add book to UI
    UI.addBookToList(book);

    // Clear fields
    UI.clearFields();
  });

// Event: Remove a book
class Event2 {}