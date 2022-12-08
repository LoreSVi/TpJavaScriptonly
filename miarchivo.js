const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const botonDatos = document.getElementById('botonDatos')

botonDatos.onclick = () => {
Toastify({
    text: `Hola ${inputNombre.value+" " +inputApellido.value}`,
    duration: 2000,
    position:"center",
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
}).showToast()

inputNombre.value = ''
inputApellido.value = ''
};

const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const shopContent = document.getElementById('shop-Content')

let carrito = [];

const boton = document.getElementById('todos');
const listaProductos = document.querySelector("#lista-productos");

boton.onclick = () => {
    fetch('/productos/data.json')
    .then((response) => response.json())
    .then(data => {
        const productos = response.results
        data.forEach((product)=> {
            const li = document.createElement('li)')
            li.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p class="price">${product.precio} $</p>
            `
          listaProductos.append(li)
})
    })



        let comprar = document.createElement("button");
        comprar.innerText = "comprar";
        comprar.className = "comprar";

        listaProductos.append(comprar);

        comprar.addEventListener("click", () => {
               carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
            });
            console.log(carrito);
            Toastify({
                text: `Producto Agregado al carrito`,
                gravity: "bottom", 
                duration: 2000,
                position:"center",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)"},
            }).showToast()  
        })

verCarrito.addEventListener("click", () => {
modalContainer.innerHTML = "";  
modalContainer.style.display = "flex";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header"
modalHeader.innerHTML = 
`<h1 class="modal-header-title">Carrito</h1>
`;
modalContainer.append(modalHeader);

const modalbutton = document.createElement("h1");
modalbutton.innerText = "x";
modalbutton.className = "modal-header-button";

modalbutton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

modalHeader.append(modalbutton);

carrito.forEach((product) => {
let carritoContent = document.createElement("div");
carritoContent.className = "modal-content";
carritoContent.innerHTML = `
<img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML =  `Total a pagar: ${total}$`;
  modalContainer.append(totalCompra);
});

