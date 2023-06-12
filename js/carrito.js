
function mostrarCarrito() {
    var div = document.createElement('div');
    div.id = "lista-carrito";
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
    var ul = document.createElement('ul');
    for (let reserva of getCarrito()) {
        var li = document.createElement('li');
        li.innerHTML =
            "Ubicación: " + reserva.lugar + "<br>" +
            "Fecha desde: " + reserva.fechadesde + "<br>" +
            "Fecha hasta: " + reserva.fechahasta + "<br>" +
            "Precio: $" + reserva.precio + "<br>";

        li.className = "lista-productos";
        ul.appendChild(li);
    }
   
    div.appendChild(ul);
    document.getElementById('container-productos-carrito').appendChild(div);

}