import ListadoProductos from "./clases/ListadoDePrecios.js"


const botonAgregar = document.querySelector('#btn-agregar')
const NombreProducto = document.querySelector("#nombre-producto")
const cantidadProducto = document.querySelector("#cantidad-producto")
const precioProducto = document.querySelector("#precio-producto")
const categoriaProducto = document.querySelector("#categoria-producto")
const texto = document.querySelector("#textoLista")

let coleccion_productos = [];

function actualizarLista(){
  texto.innerHTML = '';
  for(let i = 0; i < coleccion_productos.length;i++){
    const nuevoLi = document.createElement('li')
    nuevoLi.textContent = `Producto: ${coleccion_productos[i].nombre}, Precio: ${coleccion_productos[i].precio}, Cantidad: ${coleccion_productos[i].cantidad}, Categoria: ${coleccion_productos[i].categoria}`
    texto.appendChild(nuevoLi)
  }
}
botonAgregar.addEventListener('click',function(){

  let producto = NombreProducto.value
  let precio = Number(precioProducto.value)
  let cantidad = Number(cantidadProducto.value)
  let categoria = categoriaProducto.value
 const nuevo_objeto = new ListadoProductos(producto,precio,cantidad,categoria)
 
 coleccion_productos.push(nuevo_objeto)
 actualizarLista();

  console.log(coleccion_productos)
})