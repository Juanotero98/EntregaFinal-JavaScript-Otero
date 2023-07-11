
////////-PRIMERA PRE-ENTREGA-////////

//INICIALIZAR CARRITO//

const carritoCompras = []

//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO DE COMPRAS//

function agregaralCarrito(nombre, precio){
  let producto = {nombre, precio}
  carritoCompras.push(producto)
}

function quitarProducto(indice){
  if(indice >= 0 && indice < carritoCompras.length){
    carritoCompras.splice(indice, 1)
    console.log("Golosina eliminada del carrito")
  } else{
    console.log("Indice incorrecto, golosina no encontrada en el carrito")
  }
}

//FUNCION PARA CALCULAR EL TOTAL DE PRODUCTOS COMPRADOS//

function calcularTotal(){
  let total = 0
  for(let i = 0; i < carritoCompras.length; i++){

    total += carritoCompras[i].precio

  }

  return total
}

//AGREGAR PRODUCTOS AL CARRITO DE COMPRAS//
agregaralCarrito("Golosina 0", 1000)
agregaralCarrito("Golosina 1", 1500)
agregaralCarrito("Golosina 2", 300)
agregaralCarrito("Golosina 3", 200)

quitarProducto(1)

console.log("Carrito de Compras")
console.log(carritoCompras)
console.log("Total a pagar: $" + calcularTotal(1000, 1500,))




