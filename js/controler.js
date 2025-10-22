/**
 * Write here your update classes
 */


class SearchBook extends Observer{

  constructor(view){
      super();
      this.view = view;
  }

  update(observable, Object) {
      // get the data from the model
      let books = observable.getBooks();
      // get the HTML from the model
      let booksHTML = observable.generateBooksHTML();
      // display the books in the view
      this.view.displayBooks(booksHTML);
  }
}


/**
 * The controler' s job is to:
 * - instanciate the updates and actions
 * - link the updates to the model : the updates listen to the model
 * - link the actions to the view : the actions listen to the view's widgets
 *
 *
 *
 */
class Controler {

  constructor(model){

      this.view = new View();
      this.model = model;

      this.searchBook = new SearchBook(this.view);
      this.searchBook.observe(this.model);

      // Display initial books
      this.view.displayBooks(this.model.generateBooksHTML());
      
      this.view.searchBar.querySelector('#search-button').addEventListener('click', (event) => {
          let query = this.view.searchBar.querySelector('input').value.toLowerCase();
          let filteredBooks = this.model.books.filter(book => 
              book.title.toLowerCase().includes(query) || 
              book.author.toLowerCase().includes(query) || 
              book.year.toString().includes(query)
          );
          this.model.setBooks(filteredBooks); // This will trigger the update
      });


      // **** 1. update
      // instanciate the updates

      // link the updates to the model

      // ****  2. action
      // instanciate the actions
      // let actionButton = (event) => { ... }

      // link the actions to the view's widgets
  }
}
    
