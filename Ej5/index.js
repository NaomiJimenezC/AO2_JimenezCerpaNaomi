/**
 * Ejercicio 5: Objetos y Métodos
Define un objeto Libro con propiedades como título, autor, y paginas. Incluye un método resumen() que devuelva una descripción del libro. 
Crea un array de objetos Libro, recorrelo y utiliza el método en cada uno para mostrar su descripción en la página.

Objetivos:
Practicar la creación y uso de objetos y métodos.

*/

// Definir el objeto Libro
class Libro {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    // Método que devuelve una descripción del libro
    resumen() {
      return `${this.titulo} es un libro escrito por ${this.autor} y tiene ${this.paginas} páginas.`;
    }
}
  
  
const libros = [
    new Libro('Cien años de soledad', 'Gabriel García Márquez', 417),
    new Libro('El señor de los anillos', 'J.R.R. Tolkien', 1200),
    new Libro('Don Quijote de la Mancha', 'Miguel de Cervantes', 1023),
    new Libro('1984', 'George Orwell', 328)
];
  
libros.forEach(libro => {
    console.log(libro.resumen());
});