alert("La pagina ha sido actualizada");
/* creates the literal product */
let product1 = { 
	nombre: "paleta",
	precio: 5
};
console.log(product1);
/* Product constructor */
function product(name, price) {
    this.nombre = name,
    this.precio = price;
};

/* constructs two products */
let product2 = new product("papas", 10);
let product3 = new product("refresco", 8);
console.log(product2);
console.log(product3);

/* Product formater */
function formatProduct (product) {
    return `El producto ${product.nombre} cuesta ${product.precio} pesos`
}
console.log(formatProduct(product1));
console.log(formatProduct(product2));
console.log(formatProduct(product3));

/* Product formater to >>> prototype */
product.prototype.formatProduct = function() {
    return `El producto ${this.nombre} cuesta ${this.precio} pesos`
};

/* console.log(product1.formatProduct()); <--- This cant be used because it was not created */
console.log(product2.formatProduct());
console.log(product3.formatProduct());

/* constructor to >>> ES2015 Class */
class Product {
    constructor(name, price) {
        this.nombre = name;
        this.precio = price;
    }
    formatProduct() {
        return `El producto ${this.nombre} cuesta ${this.precio} pesos`;
    }
};

let Product1 = new Product(`Cereal`, 30);
let Product2 = new Product(`Crema`, 15);

console.log(Product1);
console.log(Product2);