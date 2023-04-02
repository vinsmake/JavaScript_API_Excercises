/* Creates the main class */
class Product {
    constructor(name, price) {
        this.nombre = name;
        this.precio = price;
    }
    formatProduct() {
        return `El producto ${this.nombre} cuesta ${this.precio} pesos`;
    }
};

let product1 = new Product(`Cereal`, 30);
let product2 = new Product(`Crema`, 15);

console.log(product1);
console.log(product2);

console.log(product1.formatProduct());
console.log(product2.formatProduct());

/* Creates the book class */
class Book extends Product {
    constructor (name, price, isbn) {
    super(name, price)
    this.isbn = isbn;
    }
    formatProduct() {
        return `El producto ${this.nombre}, con isbn "${this.isbn}" cuesta ${this.precio} pesos`;
    }
}

let libro = new Book(`Murakami`, 500, 45464132614);
console.log(libro);
console.log(libro.formatProduct());
