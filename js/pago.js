

function main() {
    mostrarDatos();
}


function mostrarDatos() {
    let datos = document.getElementById("datos");
    let div;

    medioPago.addEventListener("change", () => {

        eliminarDiv(div);

        if (document.getElementById("medioPago").value === "debito") {
            div = document.createElement("div");

            let banco = document.createElement("input");
            banco.id = "banco"
            banco.className = "input";
            banco.size = "60"
            banco.required = "true"
            banco.placeholder = "ingrese a que banco corresponde la cuenta"
            banco.style.margin = "10px";

            let nombre = document.createElement("input");
            nombre.id = "nombre"
            nombre.size = "60"
            nombre.required = "true"
            nombre.placeholder = "ingrese el nombre que figura en la tarjeta"
            nombre.style.margin = "10px";

            let cbu = document.createElement("input");
            cbu.id = "cbu"
            cbu.size = "60"
            cbu.required = "true"
            cbu.placeholder = "ingrese los datos del frente de su tarjeta"
            cbu.style.margin = "10px";

            let fecha = document.createElement("input");
            fecha.id = "fecha"
            fecha.size = "60"
            fecha.required = "true"
            fecha.placeholder = "ingrese la fecha de vencimiento de su tarjeta"
            fecha.style.margin = "10px";

            let codigo = document.createElement("input");
            codigo.id = "codigo"
            codigo.size = "60"
            codigo.required = "true"
            codigo.placeholder = "ingrese el codigo de seguridad"
            codigo.style.margin = "10px";


            div.append(banco);
            div.append(nombre);
            div.append(cbu);
            div.append(fecha);
            div.append(codigo);
            datos.append(div);
        }

        if (document.getElementById("medioPago").value === "credito") {
            div = document.createElement("div");

            let banco = document.createElement("input");
            banco.id = "banco"
            banco.size = "60"
            banco.required = "true"
            banco.placeholder = "ingrese a que banco corresponde la cuenta"
            banco.style.margin = "10px";

            let nombre = document.createElement("input");
            nombre.id = "nombre"
            nombre.size = "60"
            nombre.required = "true"
            nombre.placeholder = "ingrese el nombre que figura en la tarjeta"
            nombre.style.margin = "10px";

            let cbu = document.createElement("input");
            cbu.id = "cbu"
            cbu.size = "60"
            cbu.required = "true"
            cbu.placeholder = "ingrese los datos del frente de la tarjeta"
            cbu.style.margin = "10px";

            let fecha = document.createElement("input");
            fecha.id = "fecha"
            fecha.size = "60"
            fecha.required = "true"
            fecha.placeholder = "ingrese la fecha de vencimiento de su tarjeta"
            fecha.style.margin = "10px";

            let codigo = document.createElement("input");
            codigo.id = "codigo"
            codigo.size = "60"
            codigo.required = "true"
            codigo.placeholder = "ingrese el codigo de seguridad"
            codigo.style.margin = "10px";

            let cuotas = document.createElement("input");
            cuotas.id = "cuotas"
            cuotas.size = "60"
            cuotas.required = "true"
            cuotas.placeholder = "ingrese la cantidad de cuotas"
            cuotas.style.margin = "10px";


            div.append(banco);
            div.append(nombre);
            div.append(cbu);
            div.append(fecha);
            div.append(codigo);
            div.append(cuotas);
            datos.append(div);

        }
        if (document.getElementById("medioPago").value === "mercadopago") {



        }
        if (document.getElementById("medioPago").value === "transferencia") {

        }


    });



}


function compraExitosa() {
    if (document.getElementById("medioPago").value === "efectivo") {
        alert("¡se ha enviado el codigo de pago por mail!");
    }



    if(document.getElementById("medioPago").value ==="debito"){
        if (document.getElementById("banco").value.length != 0
            && document.getElementById("nombre").value.length != 0
            && document.getElementById("cbu").value.length != 0
            && document.getElementById("fecha").value.length != 0
            && document.getElementById("codigo").value.length != 0) {

            alert("¡se han hecho las reservas con exito!")
        }
    }

    if(document.getElementById("medioPago").value ==="credito"){
        if (document.getElementById("banco").value.length != 0
            && document.getElementById("nombre").value.length != 0
            && document.getElementById("cbu").value.length != 0
            && document.getElementById("fecha").value.length != 0
            && document.getElementById("codigo").value.length != 0
            && document.getElementById("cuotas").value.length !=0) {

            alert("¡se han hecho las reservas con exito!")
        }
    }

    if(document.getElementById("medioPago").value ==="mercadopago" || document.getElementById("medioPago").value ==="transferencia"){
        alert("se le ha enviado los datos de transferencia por mail")
    } 

    if(document.getElementById("medioPago").value ==="mismo"){
        alert("¡se han hecho las reservas con exito!")
    } 


}

function eliminarDiv(div) {
    if (div != null) {
        div.remove();
    }
}