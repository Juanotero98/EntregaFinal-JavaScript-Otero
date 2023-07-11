
////////-PRIMERA PRE-ENTREGA-////////

const carritoCompras = []

function agregaralCarrito(nombre, precio){
  let producto = {nombre, precio}
  carritoCompras.push(producto)
}


function calcularTotal(){
  let total = 0
  for(let i = 0; i < carritoCompras.length; i++){

    total += carritoCompras[i].precio

  }

  return total
}


agregaralCarrito("Producto 1", 1000)
agregaralCarrito("Producto 2", 1500)
agregaralCarrito("Producto 3", 300)
agregaralCarrito("Producto 4", 200)


console.log("Carrito de Compras")
console.log(carritoCompras)
console.log("Total a pagar: $" + calcularTotal(1000, 1500,))




