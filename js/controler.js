/**
 * Write here your update classes
 */


class Display extends Observer{

  constructor(view){
      super();
      this.view = view;
  }

  update(observable, Object) {
      // get the data from the model
      let books = observable.getBooks();
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

      this.originalBooks = this.model.getBooks();

      this.Display = new Display(this.view);

      this.model.addObservers(this.Display);

      this.view.displayBooks(this.model.getBooks());
      
      // link the actions to the view's widgets
      this.view.searchBar.querySelector('#search-button').addEventListener('click', (event) => {
          let query = this.view.searchBar.querySelector('input').value.toLowerCase();
          
          // Correction: Filtre toujours à partir de la liste originale
          let filteredBooks = this.originalBooks.filter(book => 
              book.title.toLowerCase().includes(query) || 
              book.author.toLowerCase().includes(query) || 
              book.year.toString().includes(query)
          );
          
          // Modifie le modèle, ce qui déclenchera l'update de Display
          this.model.setBooks(filteredBooks);
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
    
