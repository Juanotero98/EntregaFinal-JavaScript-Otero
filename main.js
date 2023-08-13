  /////////////////////////////////////////////////////////////////////////////////////////////////ENTREGA FINAL////////////////////////////////////////////////////////////////////////////////////////////////

  const Producto = function(nombre, precio, stock,){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }

  let producto0 = new Producto("cheese baby simple", 2500, 20)
  let producto1 = new Producto("cheese baby doble", 2800, 20)
  let producto2 = new Producto("cheese baby triple", 3100, 20)
  let producto3 = new Producto("bacon baby simple", 2600, 15)
  let producto4 = new Producto("bacon baby doble", 2900, 15)
  let producto5 = new Producto("bacon baby triple", 3200, 15)
  let producto6 = new Producto("onion baby simple", 2600, 25)
  let producto7 = new Producto("onion baby doble", 2800, 25)
  let producto8 = new Producto("american baby simple", 2650, 30)
  let producto9 = new Producto("american baby doble", 2900, 30)
  let producto10 = new Producto("american baby triple", 3100, 30)
  let producto11 = new Producto(" quarter baby simple", 2600, 10)
  let producto12 = new Producto(" quarter baby doble", 2800, 10)
  let producto13 = new Producto(" quarter baby triple", 3100, 10)
  let producto14 = new Producto(" smash baby doble", 2900, 15)
  let producto15 = new Producto(" smash baby triple", 3300, 15)

  let menu= [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15]

//FUNCION PARA FILTRAR POR NOMBRE//

  function filtrarPorNombre(){
    let nombre = prompt("Ingrese el nombre de la hamburguesa que desea buscar")
    let resultado = menu.filter((producto)=>producto.nombre.includes(nombre))

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna:" + nombre)
    }
  }

  let boton1 = document.getElementById("boton1")
  boton1.addEventListener("click", filtrarPorNombre)

//FUNCION PARA FILTRAR POR PRECIO//

function filtrarPorPrecio(){
    let minPrecio = parseFloat(prompt("Ingrese el precio minimo"))
    let maxPrecio = parseFloat(prompt("Ingrese el precio maximo"))

    let resultado = menu.filter((producto)=> producto.precio >= minPrecio && producto.precio <= maxPrecio)

    if(resultado.length > 0){
        console.table(resultado)
    }else{
        alert("No se encontraron hamburguesas en el rango de precio:" + minPrecio + "-" + maxPrecio)
    }
}

let boton2 = document.getElementById("boton2")
boton2.addEventListener("click", filtrarPorPrecio)

//FUNCION PARA CREAR HAMBURGUESA//

function agregarAlCarrito(){
    let nombre = prompt("ingrese el nombre del la hamburguesa")
    let stock = parseInt(prompt ("ingrese la cantidad"))
    let precio = parseInt(prompt("ingrese el precio de la hamburguesa"))

    if(isNaN(precio) || isNaN(stock) || nombre === null){
        alert("por favor ingrese valores validos")
        return
    }

    let producto = new Producto(nombre, precio, stock)

    menu.push(producto)
    console.table(menu)

    agregarAlCarrito(producto);

    const menuJSON = JSON.stringify(menu)
    localStorage.setItem('menu',menuJSON)
    sessionStorage.setItem('menu',menuJSON)
}

const storedMenu = localStorage.getItem('menu')
if(storedMenu){
  menu = JSON.parse(storedMenu)
  console.table(menu)
}

let boton3 = document.getElementById("boton3")
boton3.addEventListener("click", agregarAlCarrito)

//FUNCION PARA QUITAR HAMBURGUESA//

function quitarProducto(){
    const nombre = prompt("Ingrese el nombre de la hamburguesa que desea quitar")
    const index = menu.findIndex(producto => producto.nombre === nombre)

    if (index !== -1) {
      const productoEliminado = menu.splice(index, 1)[0];
      console.log("Hamburguesa eliminada:", nombre);
      console.table(menu);

      const menuJSON = JSON.stringify(menu);
      localStorage.setItem('menu',menuJSON)
      sessionStorage.setItem('menu', menuJSON);

      quitarProducto(nombre);
  } else {
      alert(`No se puede encontrar: ${nombre}`);
  };
}

const storedMenu2 =localStorage.getItem('menu')
if(storedMenu){
  menu = JSON.parse(storedMenu)
  console.table(menu)
}

let boton4 = document.getElementById("boton4")
boton4.addEventListener("click",quitarProducto) 

//LISTA DE HAMBURGUESAS//

const listaHamburguesasElement = document.getElementById("lista-hamburguesas");

menu.forEach(producto => {
  const liElement = document.createElement("li");
  liElement.textContent = `${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`;
  listaHamburguesasElement.appendChild(liElement);
});