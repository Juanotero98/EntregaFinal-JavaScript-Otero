
////////-PRIMERA PRE-ENTREGA-////////

//INICIALIZAR CARRITO//

const carritoCompras = []

//FUNCION PARA AGREGAR PRODUCTOS AL CARRITO DE COMPRAS//

function agregaralCarrito(){
  const nombre = prompt("Ingrese el nombre del producto:")
  const precio = parseFloat(prompt("Ingrese el precio del producto:"))

  if (isNaN(precio)){
    alert("El precio ingresado es incorrecto, por favor introdusca otro.")
    return
  }

  let producto = {nombre, precio}
  carritoCompras.push(producto)
  alert("Producto agregado al carrito de compras")
 
}

//FUNCION PARA CALCULAR Y MOSTRAR EL TOTAL DE LA COMPRA//

function calcularTotal(){
  let total = 0
  for (let i = 0; i < carritoCompras.length; i++){
    total += carritoCompras[i].precio
  }
  return total
}

//FUNCION PARA MOSTRAR EL CARRITO DE COMPRAS//

function mostrarCarritoCompras(){
  let mensaje = "Carrito de compras:/n"
  for (let i = 0; i < carritoCompras.length; i++){
   mensaje += `${i + 1}. ${carritoCompras[i].nombre}: $${carritoCompras[i].precio}\n`
  }
  const total = calcularTotal()
  mensaje += ("Total de la compra es: $" + total)
  alert(mensaje)
}

//FUNCION PARA QUITAR PRODUCTOS DEL CARRITO DE COMPRAS//

function quitarProducto(){
  const indice = parseInt(prompt("Ingrese por favor el Indice del producto a eliminar")) - 1
  
  if(isNaN(indice) || indice <0 || indice >= carritoCompras.length ){
    alert("El indice agregado es incorrecto")
    return
  }

  carritoCompras.splice(indice, 1)
  alert("Producto eliminado del carrito de compras")
}

//CONDICIONES//

while(true){
  const opcion = parseInt(prompt("Seleccione una opcion:/n1. Agregar al carrito:/n2. Mostrar carrito:/n3. Quitar producto:/n4. Salir"))

  switch (opcion){
    case 1:
      agregaralCarrito()
      break
    case 2:
      mostrarCarritoCompras()
      break
    case 3:
      quitarProducto()
      break
    case 4:
      alert("Gracias por utilizar el carrito de compras.")
      break
    default:
     alert("Opcion incorrecta")
  }

  if(opcion === 4){
    break
  }
}






