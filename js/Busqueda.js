var productosCarrito = [];
var carritoPrueba =[];

document.getElementById("carrito-nav").addEventListener("click", function () {
    console.log(productosCarrito);
    sessionStorage.setItem("texto-carrito", JSON.stringify(productosCarrito));
});




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
var reservaMenor= [
    new Reserva("Oasis Hotel", "Cordoba", "3 estrellas", "Estandar", "Media Pensión", 300000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Oasis Hotel", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 38000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Los Patios", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 37000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Presidencial", "Desayuno", 40000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 40000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Estandar", "Media Pensión", 40000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Los Patios", "Cordoba", "3 estrellas", "Presidencial", "Desayuno", 47000, "2", '2023-06-16', '2023-06-20'),


    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 20000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 30000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 35000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 40000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 40000, "4", '2023-06-16', '2023-06-20'),
   

    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 45000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 46000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 48000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 50000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 50000, "4", '2023-06-16', '2023-06-20'),

    
    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 56000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 60000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 62000, "2", '2023-06-16', '2023-06-20'),

    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 54000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 56000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 58000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 60000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 78000, "4", '2023-06-16', '2023-06-20'),

    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 78000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 79000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 80000, "2", '2023-06-16', '2023-06-20'),

    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 80000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 92000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 98000, "2", '2023-06-16', '2023-06-20'),


]
var reservaMayor = [
    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 98000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 92000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Presidencial", "Pensión Completa", 80000, "2", '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 80000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 79000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Premium", "Media Completa", 78000, "2", '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 78000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 60000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 58000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 56000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Presidencial", "Pensión Completa", 54000, "4", '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Soft Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 60000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Concorde Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 62000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Rochester Bariloche", "bariloche", "5 estrellas", "Premium", "Desayuno", 56000, "2", '2023-06-16', '2023-06-20'),


    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 50000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 50000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 48000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 46000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Premium", "Media Pensión", 45000, "4", '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 40000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Sheraton Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 40000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Park Hyat Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 35000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Provincial", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 30000, "4", '2023-06-16', '2023-06-20'),
    new Reserva("Hathor Mendoza", "Mendoza", "4 estrellas", "Estandar", "Desayuno", 20000, "4", '2023-06-16', '2023-06-20'),

    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 40000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Oasis Hotel", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 38000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Los Patios", "Cordoba", "3 estrellas", "Premium", "Pensión completa", 37000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Estandar", "Media Pensión", 40000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Oasis Hotel", "Cordoba", "3 estrellas", "Estandar", "Media Pensión", 300000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Los Patios", "Cordoba", "3 estrellas", "Presidencial", "Desayuno", 47000, "2", '2023-06-16', '2023-06-20'),
    new Reserva("Hotel Soft Cordoba", "Cordoba", "3 estrellas", "Presidencial", "Desayuno", 40000, "2", '2023-06-16', '2023-06-20')
]
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
function filtrar(){
var reservas=[];
if(document.getElementById('precio')==='preciomayor'){
for (let reserva of reservaMayor) {
if (reserva.lugar.toLowerCase() === document.getElementById('lugar-hotel').value.toLowerCase()
    && reserva.estrella.toLowerCase() === document.getElementById('hoteles-estrellas').value.toLowerCase()
    && reserva.tipohabitacion.toLowerCase() === document.getElementById('habitacion').value.toLowerCase()
    && reserva.pension.toLowerCase() === document.getElementById('pension').value.toLowerCase()
    && reserva.fechadesde === document.getElementById('fecha-desde').value
    && reserva.cantHuespedes === document.getElementById('cantidad-huesped').value
    && reserva.fechahasta === document.getElementById('fecha-hasta').value
) {
    reservas.push(reserva);

}}}else{
    for (let reserva of reservaMenor) {
        if (reserva.lugar.toLowerCase() === document.getElementById('lugar-hotel').value.toLowerCase()
            && reserva.estrella.toLowerCase() === document.getElementById('hoteles-estrellas').value.toLowerCase()
            && reserva.tipohabitacion.toLowerCase() === document.getElementById('habitacion').value.toLowerCase()
            && reserva.pension.toLowerCase() === document.getElementById('pension').value.toLowerCase()
            && reserva.fechadesde === document.getElementById('fecha-desde').value
            && reserva.cantHuespedes === document.getElementById('cantidad-huesped').value
            && reserva.fechahasta === document.getElementById('fecha-hasta').value
        ) {
            reservas.push(reserva);
        
        }
}
}
return reservas;
}
function mostrarReserva() {
    var divLista = crearDivListaProductos();
    var reservas= filtrar();

    var ul = document.createElement('ul');
    console.log(document.getElementById('lugar-hotel').value.toLowerCase(), document.getElementById('hoteles-estrellas').value.toLowerCase(), document.getElementById('habitacion').value.toLowerCase()
        , document.getElementById('pension').value.toLowerCase()
        , document.getElementById('fecha-desde').value
        , document.getElementById('cantidad-huesped').value);


    if (reservas.length != 0) {
        for (let reserva of reservas) {
            var li = document.createElement('li');
            li.className = "li-lista-productos";
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


            
                    li.innerHTML =
                        "Ubicación: " + reserva.lugar + "<br>" +
                        "Fecha desde: " + reserva.fechadesde + "<br>" +
                        "Fecha hasta: " + reserva.fechahasta + "<br>" +
                        "Precio: $" + reserva.precio + "<br>";
                    agregarACarrito(button, li.innerHTML, reserva);
                    
                    li.appendChild(button);
                    ul.appendChild(li);
                    coincidencia = true;
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

function alertaProductosCarrito(contenidoProducto, reserva) {
    var productos = JSON.parse(sessionStorage.getItem("productos-carrito"));
    
    if (productos) {
        if (!carritoPrueba.includes(reserva) ) {
            carritoPrueba.push(reserva);
            alert("Producto agregado a carrito");
        }
    }

}

function agregarACarrito(boton, contenidoProducto, reserva) {
    boton.addEventListener("click", () => {
        productosCarrito.push(contenidoProducto);
        console.log(productosCarrito);
        alertaProductosCarrito(contenidoProducto, reserva);
    });
}


function getCarrito(){
    return productosCarrito;
}

function rangoFecha() {
    fechaActual();
    fechaMaxima();
}

function fechaActual() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    var fecha_desde = document.getElementById('fecha-desde');
    var fecha_hasta = document.getElementById('fecha-hasta');
    fecha_desde.min = today;
    fecha_hasta.min = today;
}

function fechaMaxima() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = (yyyy + 1) + '-' + mm + '-' + dd;

    var fecha_desde = document.getElementById('fecha-desde');
    var fecha_hasta = document.getElementById('fecha-hasta');
    fecha_desde.max = today;
    fecha_hasta.max = today;
}

