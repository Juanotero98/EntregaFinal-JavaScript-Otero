//VARIABLES PARA CARRITO//

let carritoVisible = false

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

//ESTRUCTURA JSON//
let carrito ={
  items:[
    {
      titulo: "Cheese baby simple",
      precio: 2.800,
      imagen: "./imagen/Hamburguesa 1.jpeg"
    },
    {
      titulo: "Cheese baby doble",
      precio: 3.200,
      imagen: "./imagen/Hamburguesa 2.jpeg"
    },
    {
      titulo: "Cheese baby triple",
      precio: 3.500,
      imagen: "./imagen/Hamburguesa 3.jpeg"
    },
    {
      titulo: "Bacon baby simple",
      precio: 2.900,
      imagen: "./imagen/Hamburguesa 4.jpeg"
    },
    {
      titulo: "Bacon baby doble",
      precio: 3.300,
      imagen: "./imagen/Hamburguesa 5.jpeg"
    },
    {
      titulo: "Bacon baby triple",
      precio: 3.700,
      imagen: "./imagen/Hamburguesa 6.jpeg"
    },
    {
      titulo: "Onion baby simple",
      precio: 2.900,
      imagen: "./imagen/Hamburguesa 7.jpeg"
    },
    {
      titulo: "Onion baby doble",
      precio: 3.300,
      imagen: "./imagen/Hamburguesa 8.jpeg"
    },
    {
      titulo: "American baby simple",
      precio: 3.000,
      imagen: "./imagen/Hamburguesa 9.jpeg"
    },
    {
      titulo: "American baby doble",
      precio: 3.300,
      imagen: "./imagen/Hamburguesa 10.jpeg"
    },
    {
      titulo: "American baby triple",
      precio: 3.500,
      imagen: "./imagen/Hamburguesa 11.jpeg"
    },
    {
      titulo: "Quarter baby simple",
      precio: 3.000,
      imagen: "./imagen/Hamburguesa 12.jpeg"
    },
    {
      titulo: "Quarter baby doble",
      precio: 3.200,
      imagen: "./imagen/Hamburguesa 13.jpeg"
    },
    {
      titulo: "Quarter baby triple",
      precio: 3.500,
      imagen: "./imagen/Hamburguesa 14.jpeg"
    },
    {
      titulo: "Smash baby simple",
      precio: 2.800,
      imagen: "./imagen/Hamburguesa 15.jpeg"
    },
    {
      titulo: "Smash baby simple",
      precio: 2.800,
      imagen: "./imagen/Hamburguesa 16.jpeg"
    },
  
  ]
}

//FUNCIONES PARA GUARDAR Y RECUPERAR DEL STORAGE//

function guardarEnLocalStorage(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function guardarEnSessionStorage(carrito) {
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

function recuperarDelLocalStorage() {
  const data = localStorage.getItem('carrito');
  return data ? JSON.parse(data) : null;
}

function recuperarDelSessionStorage() {
  const data = sessionStorage.getItem('carrito');
  return data ? JSON.parse(data) : null;
}

//FUNCIONES PARA BOTONES DE "ELIMINAR PRODUCTO" DEL CARRITO//
function ready(){
    let botonEliminarItem = document.getElementsByClassName('btn-eliminar')
    for(let i=0; i< botonEliminarItem.length; i++){
        let button = botonEliminarItem[i]
        button.addEventListener('click', eliminarItemCarrito)
    }
    //FUNCION SUMAR CANTIDAD//
    let botonSumarCantidad = document.getElementsByClassName('sumar-cantidad')
    for(let i=0; i< botonSumarCantidad.length; i++){
        let button = botonSumarCantidad[i]
        button.addEventListener('click', sumarCantidad)
    }
    //FUNCION RESTAR CANTIDAD//
    let botonRestarCantidad = document.getElementsByClassName('restar-cantidad')
    for(let i=0; i< botonRestarCantidad.length; i++){
        let button = botonRestarCantidad[i]
        button.addEventListener('click', restarCantidad)
    }
    //FUNCION AGREGAR PRODUCTO//
    let botonAgregarAlCarrito = document.getElementsByClassName('boton-item')
    for(let i=0; i<botonAgregarAlCarrito.length; i++){
        let button = botonAgregarAlCarrito[i]
        button.addEventListener('click', agregarAlCarrito)
    }
    //RECUPERAR CARRITO DEL LOCAL STORAGE//
    carrito = recuperarDelSessionStorage() || carrito;
    //FUNCION BOTON PAGAR//
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', realizarPago)
}

//ELIMINAR PRODUCTO DEL CARRITO//
function eliminarItemCarrito(event){
    let buttonClicked = event.target
    buttonClicked.parentElement.remove()
    //GUARDAR CARRITO ACTUALIZADO EN LOCAL STORAGE//
    guardarEnLocalStorage(carrito);
    guardarEnSessionStorage(carrito);
    //ACTUALIZAR VALOR TOTAL UNA VEZ ELIMINADO EL PRODUCTO//
    actualizarTotal()
}

//ACTUALIZAR TOTAL//
function actualizarTotal(){
    let carritoConteainer = document.getElementsByClassName('carrito')[0]
    let carritoItems = carritoConteainer.getElementsByClassName('carrito-item');
    let total = 0;
    //RECORRER ELEMENTOS DEL CARRITO PARA ACTUALIZAR EL TOTAL//
    for(let i=0; i< carritoItems.length;i++){
        let item = carritoItems[i]
        let precioItem = item.getElementsByClassName('carrito-item-precio')[0]
        console.log(precioItem)
        //QUITAR EL SIMBOLO $ Y PUNTOS DEL HTML//
        let precio = parseFloat(precioItem.innerText.replace('$','').replace('.',''))
        console.log(precio);
        let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0]
        let cantidad = cantidadItem.value;
        console.log(cantidad)
        total = total + (precio * cantidad)
    }
    total= Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es");
}

//AUMENTAR CANTIDAD DE PRODUCTOS//
function sumarCantidad(event){
    let buttonClicked = event.target
    let selector = buttonClicked.parentElement
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value
    console.log(cantidadActual)
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual
    //GUARDAR CARRITO ACTUALIZADO EN LOCAL STORAGE//
    guardarEnLocalStorage(carrito);
    guardarEnSessionStorage(carrito);
    //ACTUALIZAR TOTAL//
    actualizarTotal()
}

//RESTAR CANTIDAD DE PRODUCTOS//
function restarCantidad(event){
    let buttonClicked = event.target
    let selector = buttonClicked.parentElement
    let cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value
    console.log(cantidadActual)
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual
        //GUARDAR CARRITO ACTUALIZADO EN LOCAL STORAGE//
        guardarEnLocalStorage(carrito);
        guardarEnSessionStorage(carrito)
   //ACTUALIZAR TOTAL//
    actualizarTotal()
    } 
}

//AGREGAR AL CARRITO//
function agregarAlCarrito(event){
  let button = event.target
  let item = button.parentElement
  let titulo = item.getElementsByClassName('titulo-item')[0].innerText
  console.log(titulo)
  let precio = item.getElementsByClassName('precio-item')[0].innerText
  let imagenSrc = item.getElementsByClassName('img-item')[0].src
  console.log(imagenSrc)

    agregarProductoAlCarrito(titulo, precio, imagenSrc)
    guardarEnLocalStorage(carrito)
    guardarEnSessionStorage(carrito)
}

function agregarProductoAlCarrito(titulo,precio,imagenSrc){
  let item = document.createElement('div')
  item.classList.add = ('item')
  let itemsCarrito = document.getElementsByClassName('carrito-items')[0]

  let nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo')
  for(let i=0; i<nombresItemsCarrito.length;i++){
      if(nombresItemsCarrito[i].innerText == titulo){
        Swal.fire(
          'Ooops',
          'Esta hamburguesa ya esta dentro del carrito, por favor elije otra',
          'error'
        )
          return
      }
  }
  let itemCarritoContenido =`
  <div class="carrito-item">
      <img src="${imagenSrc}" alt="" width="80px">
      <div class="carrito-item-detalles">
          <span class="carrito-item-titulo">${titulo}</span>
          <div class="selector-cantidad">
              <i class="fa-solid fa-minus restar-cantidad"></i>
              <input type="text" value="1" class="carrito-item-cantidad" disabled>
              <i class="fa-solid fa-plus sumar-cantidad"></i>
          </div>
          <span class="carrito-item-precio">${precio}</span>
      </div>
      <span class="btn-eliminar">
          <i class="fa-solid fa-trash"></i>
      </span>
  </div>`
  item.innerHTML = itemCarritoContenido
  itemsCarrito.append(item)
  //AGREGAR FUNCIONALIDAD AL BOTON DE ELIMINAR//
  item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito)
  //AGREGAR FUNCIONALIDAD A LOS BOTONES DE SUMAR Y RESTAR//
  let botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0]
  botonSumarCantidad.addEventListener('click', sumarCantidad)
  let botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0]
  botonRestarCantidad.addEventListener('click', restarCantidad)
  //ACTUALIZAR TOTAL//
  actualizarTotal()
}

//REALIZAR PAGO//
function realizarPago(event){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Gracias por su compra',
    showConfirmButton: false,
    timer: 1500
  })
    let carritoItems = document.getElementsByClassName('carrito-items')[0]
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotal()
    //LIMPIAR CARRITO Y GUARDAR CAMBIO EN LOCAL STORAGE//
    carrito.items = [];
    guardarEnLocalStorage(carrito);
    guardarEnSessionStorage(carrito)
}