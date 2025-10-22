
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


    //search-bar
    this.searchBar = document.querySelector('.search-bar');
    this.searchBar.innerHTML = `
      <div class="container my-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Rechercher un livre" aria-label="Search" aria-describedby="search-button">
          <button class="btn btn-outline-secondary" type="button" id="search-button"><img src="img/loupe.png" alt="Rechercher"></button>
        </div>
      </div>
`;


      


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



  displayBooks(books) {
    const container = document.querySelector('#books-container');
    container.innerHTML = ''; 

    if (books.length === 0) {
      container.innerHTML = '<p class="text-center">Aucun livre trouvé.</p>';
      return;
    }

    books.forEach(book => {

      const bookElement = document.createElement('div');
      bookElement.className = 'col-md-4 mb-3';
      bookElement.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            <p class="card-text">Année: ${book.year}</p>
          </div>
        </div>
      `;
      container.appendChild(bookElement);
    });
  }
}



