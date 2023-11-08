
class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
        
    }

    addProduct(title,description,price,thumbnail,code,stock){

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return null;}
        let codigoExistente
        
        this.products.forEach(producto => {
            if (producto.code === code) {
                codigoExistente = true;
                return codigoExistente;
            }
        });

        if (codigoExistente) {
            console.log("Usaste dos veces el mismo codigo");
            return null;}


        let id_producto = (this.products).length
        
        let productos = {
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ++id_producto 
        }
        this.products.push(productos)
        return this.products
    }
    getProductsById(idProducto){
        const buscarId = this.products.find(producto => producto.id === idProducto)
        if(buscarId){
            return buscarId
        }else 
        return console.log("Not Found")
    }
}

const product  = new ProductManager()

const product1 = product.addProduct("Manzana","Una rica manzana","$20","url",1,10)
const product2 = product.addProduct("Pera","Una rica Pera","$10","url",2,5)
const product3 = product.addProduct("Banana","Una rica Banana","$12","url",2,5)
const product4 = product.addProduct("Anana","Una rica Anana","$25","url",2,)

const productos = product.getProducts()
const id1 = product.getProductsById(2)
const id2 = product.getProductsById(5)


console.log(productos)

console.log(id1)
console.log(id2)
