const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const botonDatos = document.getElementById('botonDatos')

botonDatos.onclick = () => {
    Toastify({
        text: `Hola ${inputNombre.value + " " + inputApellido.value}`,
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast()

    inputNombre.value = ''
    inputApellido.value = ''
};

//const boton = document.getElementById('top3');
//const listaProductos = document.querySelector("#lista-productos");

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

     content.append(comprar);

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        product.cantida++;
                    }
                });
        } else {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    }
   });
});
        Toastify({
            text: `Producto Agregado al carrito`,
            gravity: "bottom",
            duration: 2000,
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)"
            },
        }).showToast()


 const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
 };