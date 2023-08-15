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

  //FUNCION PARA MOSTRAR RESULTADOS EN CARDS//

  function mostrarResultadoEnTarjetas(resultados, containerId) {
    const resultContainer = document.getElementById(containerId);
    resultContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos resultados
  
    resultados.forEach(producto => {
      const resultCard = document.createElement("div");
      resultCard.classList.add("result-card");
      resultCard.innerHTML = `
        <h3 class="result-name">${producto.nombre}</h3>
        <p class="result-precio">Precio: $${producto.precio.toFixed(2)}</p>
        <p class="result-stock">Stock: ${producto.stock}</p>
      `;
      resultContainer.appendChild(resultCard);
    });
  }

//FUNCION PARA FILTRAR POR NOMBRE//

  function filtrarPorNombre(){
    let nombre = prompt("Ingrese el nombre de la hamburguesa que desea buscar")
    let resultado = menu.filter((producto)=>producto.nombre.includes(nombre))

    resultado.length > 0
    ? mostrarResultadoEnTarjetas(resultado, "resultadoFiltradoContainer")
    : alert(`No se encontraron hamburguesas con el nombre: ${nombre}`);
    }
  

  let boton1 = document.getElementById("boton1")
  boton1.addEventListener("click", filtrarPorNombre)

//FUNCION PARA FILTRAR POR PRECIO//

function filtrarPorPrecio(){
    let minPrecio = parseFloat(prompt("Ingrese el precio minimo"))
    let maxPrecio = parseFloat(prompt("Ingrese el precio maximo"))

    let resultado = menu.filter((producto)=> producto.precio >= minPrecio && producto.precio <= maxPrecio)

    resultado.length > 0
    ? mostrarResultadoEnTarjetas(resultado, "resultadoFiltradoContainer")
    : alert(`No se encontraron hamburguesas en el rango de precio: ${minPrecio} - ${maxPrecio}`);
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

    let producto = new Producto(nombre, precio, stock);

    menu.push(producto)
    console.table(menu)

    agregarAlCarrito(producto);

    const menuJSON = JSON.stringify(menu)
    localStorage.setItem('menu',menuJSON)
    sessionStorage.setItem('menu',menuJSON)

    const carritoCard = document.createElement("div");
    carritoCard.classList.add("carrito-card");
    carritoCard.innerHTML = `
      <h3 class="carrito-name">${producto.nombre}</h3> <!-- Uso de la variable producto -->
      <p class="carrito-precio">Precio: $${producto.precio.toFixed(2)}</p>
      <p class="carrito-stock">Cantidad: ${producto.stock}</p>
    `;
  
    const carritoContainer = document.getElementById("carritoContainer");
    carritoContainer.appendChild(carritoCard);
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

      const carritoContainer = document.getElementById("carritoContainer");
      const carritoCards = carritoContainer.querySelectorAll(".carrito-card");

      carritoCards.forEach(card => {
        const productNameElement = card.querySelector(".carrito-name");
        if (productNameElement && productNameElement.textContent === nombre) {
          carritoContainer.removeChild(card);
        }
      });
    } else {
      alert(`No se puede encontrar: ${nombre}`);
    }
  }

const storedMenu2 =localStorage.getItem('menu')
if(storedMenu){
  menu = JSON.parse(storedMenu)
  console.table(menu)
}

let boton4 = document.getElementById("boton4")
boton4.addEventListener("click",quitarProducto)