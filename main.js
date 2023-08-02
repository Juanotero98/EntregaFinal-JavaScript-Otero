
////////-PRIMERA PRE-ENTREGA-////////

const carritoCompras = [];

//FUNCION PARA AGREGAR AL CARRITO DE COMPRAS//
function agregarAlCarrito(nombre, precio) {
  let producto = { nombre, precio };
  carritoCompras.push(producto);
}

//FUNCION PARA QUITAR DEL CARRITO DE COMPRAS//
function quitarDelCarrito(indice) {
  if (indice >= 0 && indice < carritoCompras.length) {
    carritoCompras.splice(indice, 1);
    alert("Producto eliminado del carrito.");
  } else {
    alert("Índice inválido. Producto no encontrado en el carrito.");
  }
}

//FUNCION PARA CALCUALR EL TOTAL A GASTAR//
function calcularTotal() {
  let total = 0;
  for (let i = 0; i < carritoCompras.length; i++) {
    total += carritoCompras[i].precio;
  }
  return total;
}

//FUNCION PARA MOSTRAR CARRITO DE COMPRAS//
function mostrarCarrito(productos) {
  alert("Carrito de compra:");
  for (let i = 0; i < productos.length; i++) {
    alert(`${i + 1}. ${productos[i].nombre}: $${productos[i].precio}`);
  }
  const total = calcularTotal();
  alert(`Total a gastar: $${total}`);
  
}

//FUNCIONES PARA FILTRAR POR PRECIO Y NOMBRE//
function filtrarPorPrecio(productos, minPrecio, maxPrecio) {
  return productos.filter(producto => producto.precio >= minPrecio && producto.precio <= maxPrecio);
}

function filtrarPorNombre(productos, nombre) {
  return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
}



//CONDICIONES//
while (true) {
  const opcion = parseInt(prompt(
    "Seleccione una opción:\n1. Agregar producto\n2. Quitar producto\n3. Filtrar por precio\n4. Filtrar por nombre\n5. Mostrar carrito\n6. Salir"
  ));

  switch (opcion) {
    case 1:
      const nombre = prompt("Ingrese el nombre del producto:");
      const precio = parseFloat(prompt("Ingrese el precio del producto:"));
      agregarAlCarrito(nombre, precio);
      break;
    case 2:
      const indice = parseInt(prompt("Ingrese el índice del producto a eliminar:")) - 1;
      quitarDelCarrito(indice);
      break;
    case 3:
      const minPrecio = parseFloat(prompt("Ingrese el precio mínimo:"));
      const maxPrecio = parseFloat(prompt("Ingrese el precio máximo:"));
      mostrarCarrito(filtrarPorPrecio(carritoCompras, minPrecio, maxPrecio));
      break;
    case 4:
      const nombreFiltro = prompt("Ingrese el nombre del producto a filtrar:");
      mostrarCarrito(filtrarPorNombre(carritoCompras, nombreFiltro));
      break;
    case 5:
      mostrarCarrito(carritoCompras);
      break;
    case 6:
      prompt("Gracias por utilizar el carrito de compras.");
      break;
    default:
      prompt("Opción inválida.");
  }

  if (opcion === 6) {
    break;
  }
}






