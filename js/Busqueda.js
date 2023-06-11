function Reserva(nombre, lugar, estrella, tipohabitacion, pension, precio, cantHuespedes, fechadesde, fechahasta) {
    this.nombre = nombre;
    this.lugar = lugar;
    this.estrella = estrella;
    this.tipohabitacion = tipohabitacion;
    this.pension = pension;
    this.precio = precio;
    this.cantHuespedes = cantHuespedes;
    this.fechadesde = fechadesde;
    this.fechahasta = fechahasta;
}

var reservaMayor = [
    new Reserva("Hotel Mendoza", "Mendoza", "5 estrellas", "Presidencial", "Pensión Completa", 78000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "5 estrellas", "Presidencial", "Pensión Completa", 60000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "5 estrellas", "Presidencial", "Pensión Completa", 58000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "5 estrellas", "Presidencial", "Pensión Completa", 56000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "5 estrellas", "Presidencial", "Pensión Completa", 54000, 4, '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Mendoza", "Mendoza", "5 estrellas", "Premium", "Media Pensión", 50000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "5 estrellas", "Premium", "Media Pensión", 50000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "5 estrellas", "Premium", "Media Pensión", 48000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "5 estrellas", "Premium", "Media Pensión", 46000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "5 estrellas", "Premium", "Media Pensión", 45000, 4, '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Mendoza", "Mendoza", "5 estrellas", "Estandar", "Desayuno", 40000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "5 estrellas", "Estandar", "Desayuno", 40000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "5 estrellas", "Estandar", "Desayuno", 35000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "5 estrellas", "Estandar", "Desayuno", 30000, 4, '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "5 estrellas", "Estandar", "Desayuno", 20000, 4, '2023-06-16', '2023-06-20'),

]


function filtrarReserva() {
    let paquetesFiltrados = [];

    if (document.getElementById('precio').value == 'preciomayor') {
        for (let reserva of reservaMayor) {
            if (reserva.lugar.toLowerCase() === document.getElementById('lugar-hotel').value.toLowerCase()
                && reserva.estrella.toLowerCase() === document.getElementById('hoteles-estrellas').value.toLowerCase()
                && reserva.tipohabitacion.toLowerCase() === document.getElementById('habitacion').value.toLowerCase()
                && reserva.pension.toLowerCase() === document.getElementById('pension').value.toLowerCase()
                && reserva.fechadesde === document.getElementById('fecha-desde').value
                && paquete.cantHuespedes === document.getElementById('cantidad-huesped').value) {
                if (document.getElementById('fecha-hasta').value === '' || reserva.fechahasta === document.getElementById('fecha-hasta').value) {
                    paquetesFiltrados.push(reserva);
                }
            }
        }
    } else {
        for (let reserva of reservaMenor) {
            if (reserva.lugar.toLowerCase() === document.getElementById('lugar-hotel').value.toLowerCase()
                && reserva.estrella.toLowerCase() === document.getElementById('hoteles-estrellas').value.toLowerCase()
                && reserva.tipohabitacion.toLowerCase() === document.getElementById('habitacion').value.toLowerCase()
                && reserva.pension.toLowerCase() === document.getElementById('pension').value.toLowerCase()
                && reserva.fechadesde === document.getElementById('fecha-desde').value
                && paquete.cantHuespedes === document.getElementById('cantidad-huesped').value) {
                if (document.getElementById('fecha-hasta').value === '' || reserva.fechahasta === document.getElementById('fecha-hasta').value) {
                    paquetesFiltrados.push(reserva);
                }
            }
        }
    }

    return paquetesFiltrados;
}
function eliminarDiv(nombreDiv) {
    var div = document.getElementById(nombreDiv);
    if (div != null) {
        div.remove();
    }
}

function crearDivListaProductos() {
    eliminarDiv("lista");

    var div = document.createElement('div');
    div.id = "lista";
    div.style.cssText =
        `
        color: #ffffff;
        width: 100%;
        max-width: 800px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;    
        padding: 30px 20px;
        box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.221);
        background-color: #494cf8;
    `;

    return div;
}

function mostrarReserva() {
    var divLista = crearDivListaProductos();

    var ul = document.createElement('ul');
    

    if (reservaMayor.length != 0 && document.getElementById('precio').value == 'precio-mayor') {
        for (let reserva of reservaMayor) {
            var li = document.createElement('li');
            var button = document.createElement('button');
            button.style.cssText = `
            height: 30px; 
            padding-left: 5px;
            padding-right: 5px;  
            margin: 20px auto; 
            text-transform: uppercase;
            background-color:#151750;
            border-style: solid; 
            border-radius: 10px;  
            width: 150px;   
            cursor: pointer;
            transition: 0.5s all;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            cursor: pointer;
            transition: 0.5s all;
            border: none;
            `;

            button.textContent = 'Agregar a carrito';


            if (reserva.lugar.toLowerCase() === document.getElementById('lugar-hotel').value.toLowerCase()
                && reserva.estrella.toLowerCase() === document.getElementById('hoteles-estrellas').value.toLowerCase()
                && reserva.tipohabitacion.toLowerCase() === document.getElementById('Tipo-habitacion').value.toLowerCase()
                && reserva.pension.toLowerCase() === document.getElementById('pension').value.toLowerCase()
                && reserva.fechadesde === document.getElementById('fecha-desde').value
                && paquete.cantHuespedes === document.getElementById('cantidad-huesped').value) {
                if (document.getElementById('fecha-hasta').value === '' || reserva.fechahasta === document.getElementById('fecha-hasta').value) {
                    paquetesFiltrados.push(reserva);

                    li.innerHTML =
                        "Ubicación: " + reserva.lugar + "<br>" +
                        "Fecha desde: " + reserva.fechadesde + "<br>" +
                        "Fecha hasta: " + reserva.fechahasta + "<br>" +
                        "Precio: $" + reserva.precio + "<br>";
                    agregarACarrito(button, li.innerHTML);
                    li.className = "li-lista-productos";
                    li.appendChild(button);
                    ul.appendChild(li);
                }
            }
        }


        divLista.appendChild(ul);
        document.getElementById('container-filtros').appendChild(divLista);

    } else {
        divLista.appendChild(crearEncabezadoSinCoindicenciasBusqueda());
        document.getElementById('container-filtros').appendChild(divLista);
    }
}

function crearEncabezadoSinCoindicenciasBusqueda() {
    let h3 = document.createElement("h3");
    h3.textContent = 'No hay coincidencias con los filtros de su búsqueda';
    return h3;
}

