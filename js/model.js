

/**
 * Write here your model classes
 * - extend Observable
 * - determine precisely the data of your model
 * - write the methods to access and modify the data
 * - don't forget to notify the observers when the data are modified
 */
class Model extends Observable {


    constructor(){
        super();
        this.books = [
            { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
            { title: "1984", author: "George Orwell", year: 1949 },
            { title: "Moby Dick", author: "Herman Melville", year: 1851 }
        ];
    }

    getBooks() {
        return this.books;
    }

    setBooks(newBooks) {
        this.books = newBooks;
        this.notifyObservers();
    }

    


}

