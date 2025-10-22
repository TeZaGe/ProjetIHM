class UpdateAddBook extends Observer{

    constructor(view, model){
        super();
        this.view = view;
        this.model = model;
    }

    update(observable, object) {
        let books = observable.getBooks();
        this.view.displayBooks(books);
    }
}

class UpdateDeleteBook extends Observer{

        constructor(view, model){
        super();
        this.view = view;
        this.model = model;
    }

    update(observable, object) {
        let books = observable.getBooks();
        this.view.displayBooks(books);
    }

}

class UpdateSearchBook extends Observer{

  constructor(view, model){
      super();
      this.view = view;
      this.model = model;
  }

    update(observable, object) {
        let books = observable.getBooks();
        this.view.displayBooks(books);
    }
}
        
class Display extends Observer{

  constructor(view){
      super();
      this.view = view;
  }

  update(observable, object) {
      let books = observable.getBooks();
      this.view.displayBooks(books);
  }
}


class Controler {

  constructor(model){
    this.view = new View();
    this.model = model;

    // Display Books
    this.display = new Display(this.view);
    this.model.addObservers(this.display);
    this.view.displayBooks(this.model.getBooks());
      
    // Search Books
    this.updateSearchBook = new UpdateSearchBook(this.view, this.model);
    this.model.addObservers(this.updateSearchBook);
    
    this.view.searchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        this.model.searchBooks(query);
    });

    // Add Book
    this.AddBook = new UpdateAddBook(this.view, this.model);
    this.model.addObservers(this.AddBook);



    
    // Display form Add Book
    this.view.addButton.addEventListener('click', () => {
        this.view.displayformAddBook();
        
        if (this.view.addBook) {
            this.view.addBook.addEventListener('submit', (event) => {
                event.preventDefault();
                const title = this.view.addBook.querySelector('#title').value;
                const author = this.view.addBook.querySelector('#author').value;
                const year = parseInt(this.view.addBook.querySelector('#year').value);
                this.model.addBook({ title, author, year });
                this.view.formAddBookContainer.innerHTML = '';
            });
        }

        if (this.view.cancelButton) {
            this.view.cancelButton.addEventListener('click', () => {
                this.view.formAddBookContainer.innerHTML = '';
            });
        }
    });

    //Delete Book
    this.deleteBook = new UpdateDeleteBook(this.view, this.model);
    this.model.addObservers(this.deleteBook);

    // Add event delegation for delete buttons
    this.view.booksContainer.addEventListener('click', (event) => {
                const title = this.view.title;
                const author = this.view.author;
                const year =  this.view.year;
                
                const bookToDelete = this.model.getBooks().find(book => 
                    book.title === title && 
                    book.author === author && 
                    book.year === year
                );
                this.model.deleteBook(bookToDelete);
  });

  }
}

