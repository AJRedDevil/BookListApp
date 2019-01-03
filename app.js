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
}

// Store Class: Handles Storage
class Store {}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add a book
class Event1 {}

// Event: Remove a book
class Event2 {}