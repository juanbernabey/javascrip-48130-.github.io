const tablaCompra = document.getElementById("tablaCompra");
const totalPrecioCompra = document.getElementById("totalPrecioCompra");

function renderJuegoCompradoHTML(listaJuegoCarrito) {
    const tbody = document.createElement("tr");
    tbody.classList.add("compraConfirmada");

    tbody.innerHTML += `
        <td> <img src="${listaJuegoCarrito.imagen
        }" class="imgJuegoCarrito" alt="${listaJuegoCarrito.nombreJuego
        }" width="49px"></td>
        <td><h3 class="nombreJuegoCarrito">${listaJuegoCarrito.nombreJuego
        }</h3></td>
        <td><h5 class="precioCarrito">$${listaJuegoCarrito.precio}</h5></td>
        <td>
            <h5 class="cantidadCarritoConfirm" id="cantidadCarritoTabla">${listaJuegoCarrito.cantidad
        }</h5>
        </td>
        <td><h5 class="subTotalCarrito">$${(
            listaJuegoCarrito.precio * listaJuegoCarrito.cantidad
        ).toFixed(2)}</h5></td>
        <div class=">
    `;

    tablaCompra.appendChild(tbody);
}
function MostrarProductoComprados() {
    tablaCompra.innerHTML = "";

    if (localStorage.getItem("carrito"))
        carrito.forEach((juego) => {
            renderJuegoCompradoHTML(juego);
        });
}
function renderTotalCompraHTML() {
    const divTotal = document.createElement("div");

    divTotal.classList.add("boxCardTotalOrden");
    divTotal.innerHTML = `
      <h2 class="tituloOrden">SU ORDEN</h2>
      <table class="tableTotalCar">
            <tbody class="tbodyTotalCar">
           
            <tr class="trTotalCar">
                <th>TOTAL</th>
                <td>
                <span class="precioTotal" id="spaneando">ARS$${getPrecioTotal()}</span>
                </td>
            </tr>
            </tbody>
      </table>
      <form id="formulario">
      <section class=seccionDatos>
            <h2 class="TituloTotalCarrito">DATOS PERSONALES</h2>
                <label for="nombyapeC">Nombre y Apellido</label>
                <input class="form-control" type="text" id="nombyapeC" required>
                <label for="emailC">Email</label>
                <input class="form-control"placeholder="" value="" type="email" id="emailC" required>
                <label for="telefonoC">Telefono</label>
                <input class="form-control" type="tel" id="telefonoC">
                <label for="direccionC">Dirección</label>
                <input class="form-control" type="text" id="direccionC">
        </section>
        <h2 class="TituloTotalCarrito">DATOS DE TARJETA</h2>
        <section>
            <section class="contenedorTarjeta">
                <div class="cred">
                    <div class="face front">
                        <h3 class="debit">Tarjeta </h3>
                        <input type="text" class="number textBoxCard numTarjCard" placeholder="0000 0000 0000 0000"
                         value="0000 0000 0000 0000"></input>
                        <h4 class="valid"><span>Valido Hasta</span><input class="textBoxCard ValidCard" 
                        type="text" placeholder="00/00" value="00/00"></input></h4>
                        <h4 class="cred-holder"><input class="textBoxCard nombApCard" 
                        type="text" placeholder=" nombre"></h4>
                    </div>
            </section>
        </section>
        <section class="SeccionBtnCompra">
            <button class="btnConfirm" id="realizarCompra" type="submit">Confirmar Compra</button>
        </section>
        </form>
    `;
    totalPrecioCompra.appendChild(divTotal);

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombyapeC = document.getElementById("nombyapeC").value;
        const emailC = document.getElementById("emailC").value;

        Swal.fire({
            title: "COMPRA EXITOSA!",
            icon: "success",
            html: `
            <div class="CompraExitosaSweet">
                <h2>${nombyapeC}</h2>
                <p>Gracias por su compra!<p>
                <img class="animate__animated animate__swing bolsaTienda" src="img/bolsa.png" alt="bolsatienda">
                
                <p>Su ticket de compra fue enviado a:<h3>${emailC}<h3></p>
            </div>`,
            showCancelButton: false,
            confirmButtonText: "Aceptar",
            backdrop:
                "radial-gradient(60% 1024px at 50% 200px, #212121 45%,  rgb(20, 50, 139)100%)",
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarTodoElCarrito();
                window.open("index.html","_self"); 
            }
        });
    });
}


renderTotalCompraHTML();
mostrarValorCarritoIcon(); 
MostrarProductoComprados(); 