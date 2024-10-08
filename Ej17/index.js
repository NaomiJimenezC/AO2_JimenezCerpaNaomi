/*
La empresa "Tienda de Fantasía S.L." está desarrollando un sistema de gestión de inventario
para sus productos mágicos. Necesitan una estructura de datos para representar cada
producto.
Crea una clase Producto con las siguientes propiedades:
- Nombre
- Categoría (por ejemplo, "Poción", "Varita", "Libro")
- Precio
- Cantidad en Stock (comenzará en 0)
Crea un método actualizarStock(cantidad) que permita aumentar o disminuir la cantidad en
stock de un producto. Si la cantidad resultante es menor que 0, la cantidad debe establecerse
en 0.
Implementa una clase Inventario que contenga un array de objetos Producto. Esta clase debe
tener métodos para:
- Agregar un nuevo producto al inventario.
- Eliminar un producto por su nombre.
- Buscar un producto por su nombre y mostrar su información.
Implementa validaciones para asegurarte de que los datos de entrada (como el precio y la
cantidad en stock) sean válidos y no provoquen errores inesperados.
Objetivos:
- Practicar el uso de clases y objetos.
- Implementar lógica de gestión de inventario y validaciones
*/

class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = 0; // El stock comienza en 0
    }

    // Método para actualizar el stock
    actualizarStock(cantidadAactualizar) {
        this.cantidad += cantidadAactualizar;
        if (this.cantidad < 0) {
            this.cantidad = 0; // Si la cantidad es menor que 0, se ajusta a 0
        }
    }
}

class Inventario{
    constructor(){
        this.inventarioDeProductos = []
    }

    agregar(producto){
        if(this.buscarProducto(producto.nombre)){
            console.log("Este producto ya existe")
        } else {
            this.inventarioDeProductos.push(producto)
        }
        
    }
    buscarProducto(nombreDelProducto) {
        return this.inventarioDeProductos.find(producto => producto.nombre === nombreDelProducto);
    }
    mostrarInfoProducto(nombreProducto) {
        let producto = this.buscarProducto(nombreProducto);
        if (producto) {
            console.log(`Nombre: ${producto.nombre} Categoría: ${producto.categoria} Cantidad: ${producto.cantidad}`);
        } else {
            console.log("No existe");
        }
    }
}

// Crear algunos productos
let pocion = new Producto("Poción de curación", "Poción", 25);
let varita = new Producto("Varita mágica", "Varita", 150);
let libro = new Producto("Libro de hechizos", "Libro", 50);

// Crear el inventario
let inventario = new Inventario();

// Agregar productos al inventario
console.log("Agregando productos al inventario...");
inventario.agregar(pocion);
inventario.agregar(varita);
inventario.agregar(libro);

// Intentar agregar un producto repetido
console.log("Intentando agregar un producto repetido...");
inventario.agregar(pocion); // Debería mostrar un mensaje de que el producto ya existe

// Buscar un producto que existe en el inventario
console.log("Buscando un producto que existe...");
console.log(inventario.buscarProducto("Poción de curación")); // Debería devolver true

// Buscar un producto que no existe
console.log("Buscando un producto que NO existe...");
console.log(inventario.buscarProducto("Elixir de invisibilidad")); // Debería devolver false

// Mostrar la información de un producto existente
console.log("Mostrando información de un producto existente...");
inventario.mostrarInfoProducto("Poción de curación");

// Mostrar la información de un producto que no existe
console.log("Mostrando información de un producto que NO existe...");
inventario.mostrarInfoProducto("Elixir de invisibilidad");

// Actualizar stock de un producto y mostrar su nueva información
console.log("Actualizando stock de un producto...");
pocion.actualizarStock(10); // Aumenta el stock a 10
inventario.mostrarInfoProducto("Poción de curación"); // Verificar el cambio
pocion.actualizarStock(-12); // Intentar reducir más allá de 0
inventario.mostrarInfoProducto("Poción de curación"); // Verificar el cambio