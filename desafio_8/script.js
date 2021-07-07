class Producto {
    constructor(nombre,precio,detalle,cantidad){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = parseInt(cantidad);
        this.disponible = true;
     }
     sumaIva() {
     return this.precio * 1.21;
     }
     Venta() {
         this.disponible = false;
     }
     precioSugerido() {
         return this.precio *1.21 *1.25;
     }
 }
 
 //Array
 var arrayProductos = [];
 do{
     var comprobacion = prompt("Ingrese el nombre del producto o escriba finalizar para terminar de agregar");
     if(comprobacion === "finalizar" || comprobacion === "FINALIZAR" || comprobacion === "Finalizar") {
         break;
     }else{
     nombreP = comprobacion;
     var precioP = prompt("Ingrese el precio del producto");
     var detalleP = prompt("Ingrese el detalle del producto");
     var cantidadP = prompt("Ingrese la cantidad del producto");
     arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP)); 
     }
 }
 while(comprobacion != "finalizar" || comprobacion != "FINALIZAR" || comprobacion != "Finalizar") 

 console.log(arrayProductos);
 
for (let producto of arrayProductos) { 
        //Creación del Elemento
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<h3>Nombre: ${producto.nombre}</h3>
                                <p>Cantidad: ${producto.cantidad}</p>
                                <p>Detalle: ${producto.detalle}</p>`;
        document.body.appendChild(contenedor);
     }
  
//POCO STOCK - MENOS DE 3 PRODUCTOS.
var pocoStock = arrayProductos.filter(producto => producto.cantidad  <= 3);
document.write("<h3>Lista de Productos con poco Stock (menos de 3 unidades) : </h3>");
for(let producto of pocoStock){
    let contenedor = document.createElement("div");
    //Definiendo el innerHTML del elemento con plantilla de texto 
    contenedor.innerHTML = ` <h3> Nombre: ${producto.nombre}</h3>
                             <p>Cantidad: ${producto.cantidad}</p>
                             <p>Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);           
}

//MENOS DE 3 PRODUCTOS

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades) </h3>");
for (let producto of pocoStock) {
    let contenedor = document.createElement("div");

    contenedor.innerHTML =  ` <h3> Nombre: ${producto.nombre}</h3>
                              <p>Cantidad: ${producto.cantidad}</p>
                              <p>Detalle: ${producto.detalle}</p>`;
document.body.appendChild(contenedor);
}

//SIN STOCK 

var sinStock =arrayProductos.filter(producto => producto.cantidad == 0 || procducto.disponible == false);
console.log(sinStock);
documen.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");

for(var producto of sinStock) {
document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades) </h3>");
let contenedor = document.createElement("div");
contenedor.innerHTML =  ` <h3> Nombre: ${producto.nombre}</h3>
                          <p>Cantidad: ${producto.cantidad}</p>
                          <p>Detalle: ${producto.detalle}</p>`;
document.body.appendChild(contenedor);
}

