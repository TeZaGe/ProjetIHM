
/**
 * Write here your view classes
 * - instanciate the widgets
 * - append the widgets to the DOM
 */
class View {

  constructor(){


    // header
    this.header = document.querySelector('header');
    this.header.innerHTML = `
      <div class="container-fluid py-3">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo">
            logo
          </div>
          <div class="d-flex gap-5 position-absolute start-50 translate-middle-x">
            <a href="#" class="text-white text-decoration-none">Accueil</a>
            <a href="#" class="text-white text-decoration-none">Maps</a>
            <a href="#" class="text-white text-decoration-none">Connexion</a>
          </div>
        </div>
      </div>
`;

    //search-bar and add book button
    this.searchBar = document.querySelector('.search-bar');
    this.searchBar.innerHTML = `
      <div class="container my-4">
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" id="search-input" placeholder="Rechercher un livre" aria-label="Search" aria-describedby="search-button">
          <button class="btn btn-outline-secondary d-flex align-items-center px-3" type="button" id="search-button">
            <img src="img/loupe.png" alt="Rechercher" class="img-fluid" style="width: 24px; height: 24px;">
          </button>
          <button class="btn btn-outline-secondary d-flex align-items-center px-3" type="button" id="add-book-button">
            <img src="img/ADD.png" alt="Ajouter" class="img-fluid" style="width: 24px; height: 24px;">
          </button>
        </div>
      </div>
      <div id="form-add-book-container" class="container mt-3"></div>
`;
    this.searchInput = this.searchBar.querySelector('#search-input');
    this.addButton = this.searchBar.querySelector('#add-book-button');
    this.formAddBookContainer = document.querySelector('#form-add-book-container');
   
   
    // display book
    this.displayArea = document.querySelector('.display-area');
      this.displayArea.innerHTML = `
        <div class="container my-4"></div>
        <div class="container rounded-4 shadow" style="background-color: #E6CFA9; min-height: 50svh; padding: 4rem 1.5rem; border-radius: 1rem; overflow: hidden;">
          <div class="row gx-4" id="books-container">
          </div>
        </div>
            `;
    this.booksContainer = this.displayArea.querySelector('#books-container');


    // footer
    this.footer = document.querySelector('footer');
    this.footer.innerHTML = `
      <div class="container-fluid">
        <div class="text-center mb-3">
          <p class="text-uppercase small mb-2 opacity-75" style="letter-spacing: 2px;">VOULEZ-VOUS UN LIVRE ? BIEN VOUS ÊTES AU BON ENDROIT</p>
          <h2 class="display-6 mb-3">Demander plus d'informations</h2>
          <button class="btn btn-light rounded-pill px-4">Nous contacter</button>
        </div>
        
        <hr class="border-white opacity-25 my-3">
        
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="logo">
            logo
          </div>
          <div class="d-flex gap-4">
            <a href="#" class="text-white text-decoration-none">Accueil</a>
            <a href="#" class="text-white text-decoration-none">Maps</a>
            <a href="#" class="text-white text-decoration-none">Inscription</a>
            <a href="#" class="text-white text-decoration-none">Connexion</a>
          </div>
        </div>
        
        <p class="text-center small opacity-75 mb-2">COPYRIGHT © 2025 | Tout droit réservé</p>
      </div>
  `;

  }

  displayformAddBook() {
    const container = document.querySelector('#form-add-book-container');
    const formElement = document.createElement('div');
    formElement.className = 'col-11 col-sm-8 col-md-6 mx-auto';
    formElement.innerHTML = `
      <div class="card shadow" style="background-color: #E6CFA9;">
        <div class="card-body p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
        <h5 class="card-title fs-4 mb-0">Ajouter un livre</h5>
        <button type="button" class="btn-close" id="cancel-button" aria-label="Close"></button>
          </div>
          <form id="add-book-form">
        <div class="mb-4">
          <label for="title" class="form-label fs-5">Titre</label>
          <input type="text" class="form-control form-control-lg" id="title" required style="color: black; background-color: white;">
        </div>
        <div class="mb-4">
          <label for="author" class="form-label fs-5">Auteur</label>
          <input type="text" class="form-control form-control-lg" id="author" required style="color: black; background-color: white;">
        </div>
        <div class="mb-4">
          <label for="year" class="form-label fs-5">Année</label>
          <input type="number" class="form-control form-control-lg" id="year" required style="color: black; background-color: white;">
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-lg px-4" style="background-color: #FBF9D1; border-color: #FBF9D1; color: #000;">Ajouter</button>
        </div>
          </form>
        </div>
      </div>
        `;
    container.innerHTML = '';
    container.appendChild(formElement);
    this.cancelButton = document.querySelector('#cancel-button');
    this.addBook = document.querySelector('#add-book-form');
  }

  displayBooks(books) {
    const container = document.querySelector('#books-container');
    container.innerHTML = ''; 

    if (books.length === 0) {
      container.innerHTML = '<p class="text-center fs-4 my-4">Aucun livre trouvé.</p>';
      return;
    }

    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.className = 'col-12 col-sm-6 col-md-4 mb-4';
      bookElement.innerHTML = `
        <div class="card h-100 shadow-sm" style="background-color: #C1856D;">
          <div class="card-body d-flex flex-column">
            <div>
              <h5 class="card-title fs-4 mb-3 title">${book.title}</h5>
              <h6 class="card-subtitle mb-3 text-muted fs-5 author">${book.author}</h6>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-auto">
              <p class="card-text fs-6 mb-0 year">Année: ${book.year}</p>
              <button class="btn btn-outline-secondary d-flex align-items-center px-3 ms-3 delete-button" type="button" aria-label="Supprimer">
          <img src="img/poubelle.png" alt="Supprimer" class="img-fluid" style="width: 30px; height: 30px;">
              </button>
            </div>
          </div>
        </div>
            `;
      container.appendChild(bookElement);
      this.deleteButton = document.querySelector('#delete-button');
      this.year = book.year;
      this.title = book.title;
      this.author = book.author;
    });
  }
}



