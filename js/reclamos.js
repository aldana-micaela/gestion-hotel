function pageClaim() {

    encabezado();

    contenido();

    pieDePagina();

}

function encabezado() {

    const encabezado = document.createElement("header");
    encabezado.id = "encabezado";
    document.body.appendChild(encabezado);
   
    const logo = document.createElement("div");
    const img_logo = document.createElement("img");
    const lbl_logo = document.createElement("label");
    img_logo.src="../icons/hat.png"
    img_logo.width=40
    img_logo.alt="logotipo"
    img_logo.id="logotipo"
    lbl_logo.innerText="Hoteles Al Toque"
    lbl_logo.htmlFor="logotipo"
    logo.id = "logo";
    encabezado.appendChild(logo);
    logo.appendChild(img_logo);
    logo.appendChild(lbl_logo);

    const menu_navegacion = document.createElement("nav");
    menu_navegacion.id = "menu_navegacion";
    encabezado.appendChild(menu_navegacion);

    crearListadoEnlaces();

    crearSelectorIdioma();

}

function crearListadoEnlaces() {
    const menu_listado = document.createElement("ul");
    menu_listado.id = "menu_listado";
    menu_navegacion.appendChild(menu_listado);

    const enlaces = document.createElement("li");
    enlaces.id = "enlaces";
    menu_listado.appendChild(enlaces);

    const enlace_inicio = document.createElement("a");
    enlace_inicio.id="enlace_inicio"
    enlace_inicio.href = "#"
    enlace_inicio.innerText = "Inicio"
    enlaces.appendChild(enlace_inicio);

    const enlace_iniciar_sesion = document.createElement("a");
    enlace_iniciar_sesion.id="enlace_iniciar_sesion"
    enlace_iniciar_sesion.href = "../html/login.html"
    enlace_iniciar_sesion.innerText = "Iniciar Sesion"
    enlaces.appendChild(enlace_iniciar_sesion);

    const enlace_registrarse = document.createElement("a");
    enlace_registrarse.id="enlace_registrarse"
    enlace_registrarse.href = "../html/registro.html"
    enlace_registrarse.innerText = "Registrarse"
    enlaces.appendChild(enlace_registrarse);

    const enlace_contactanos = document.createElement("a");
    enlace_contactanos.id="enlace_contactanos" 
    enlace_contactanos.href = "#"
    enlace_contactanos.innerText = "Contactenos"
    enlaces.appendChild(enlace_contactanos);
}

function crearSelectorIdioma() {
    const form_idioma = document.createElement("form");
    form_idioma.id = "form_idioma"
    menu_navegacion.appendChild(form_idioma);

    const select_idioma = document.createElement("select");
    select_idioma.id = "idioma";
    const idioma = document.createElement("label");
    idioma.htmlFor = "idioma";
    idioma.innerText = "Idioma: ";
    idioma.id="label"
    form_idioma.appendChild(idioma);
    form_idioma.appendChild(select_idioma);

    const espaniol = document.createElement("option");
    espaniol.innerText = "Arg 🇦🇷"
    select_idioma.appendChild(espaniol);

    const ingles = document.createElement("option");
    ingles.innerHTML = "Eng 🇬🇧"
    select_idioma.appendChild(ingles);

    select_idioma.addEventListener('click', (event) => {
       cambiarIdioma(event)
    });

}



function contenido() {
    const wrapper = document.createElement("section");
    wrapper.className = "wrapper";
    wrapper.id = "wrapper";
    document.body.appendChild(wrapper);

    const titulo = document.createElement("h2");
    titulo.id="h2"
    titulo.innerText = "Reclamos"
    wrapper.appendChild(titulo);

    const botonReclamo = document.createElement("button");
    botonReclamo.id="botonReclamo";
    botonReclamo.type = "submit";
    botonReclamo.innerText = "Realizar Nuevo Reclamo";
    wrapper.appendChild(botonReclamo);
    botonReclamo.addEventListener('click', mostrarFormulario)

}

function mostrarFormulario(){
    document.getElementById('botonReclamo').style.display = 'none';
    const form_reclamo = document.createElement("form");
    form_reclamo.id = "form_reclamo"
    wrapper.appendChild(form_reclamo);

    const nombre_reclamo=document.createElement("label")
    nombre_reclamo.id="label_n"
    nombre_reclamo.innerText="Nombre:  "
    nombre_reclamo.htmlFor="inputNombre"
   
    const inputNombre=document.createElement("input")
    inputNombre.id="nombre_reclamo"
    inputNombre.type="text"
    inputNombre.placeholder="Ingresar titulo ..."
   
    form_reclamo.appendChild(nombre_reclamo)
    form_reclamo.appendChild(inputNombre)

    const descripcion_reclamo=document.createElement("label")
    descripcion_reclamo.id="label_d"
    descripcion_reclamo.innerText="Descripcion:  "
    descripcion_reclamo.htmlFor="inputDescripcion"
   
    const inputDescripcion=document.createElement("textarea")
    inputDescripcion.id="descripcion_reclamo"
    inputDescripcion.placeholder="Detallar el motivo del reclamo ..."
   
    form_reclamo.appendChild(descripcion_reclamo)
    form_reclamo.appendChild(inputDescripcion)

    const botonConfirmar = document.createElement("button")
    botonConfirmar.id="confirmar"
    botonConfirmar.type = "submit"
    botonConfirmar.innerText = "Confirmar"
    form_reclamo.appendChild(botonConfirmar)
    botonConfirmar.addEventListener('click', mostrarReclamoRealizado)
}


function mostrarReclamoRealizado(event){
    event.preventDefault()
    
    const contenedorTicket=document.createElement("div")
    contenedorTicket.id="contenedorTicket"
    wrapper.appendChild(contenedorTicket)
    document.getElementById("form_reclamo").style.display = 'none';
    const tituloSector=document.createElement("h3")
    tituloSector.innerText="Reclamo Nuevo Realizado ✅"
    tituloSector.id="tituloSector"
    contenedorTicket.appendChild(tituloSector)

    crearTicket();

   
    const botonTicket = document.createElement("button")
    botonTicket.id="btn-ticket"
    botonTicket.type = "submit"
    botonTicket.innerText = "Generar Ticket"
    wrapper.appendChild( botonTicket);

    botonTicket.addEventListener('click', generarTicket)
    

}


function crearTicket(){

    const ticket = document.createElement("table")
    ticket.id="ticket"
    
    const fila1 = document.createElement("tr")
    ticket.appendChild(fila1);
    const celda0 = document.createElement("th")
    celda0.id="titulo"
    celda0.innerText="  Ticket de Reclamo "
    celda0.colSpan="4"
    ticket.appendChild(celda0);
    const fechaActual = Date.now();
    const hoy = new Date(fechaActual);
    const fila2 = document.createElement("tr")
    fila2.id="fila2"
    ticket.appendChild(fila2);
    const celda1 = document.createElement("td")
    celda1.innerText="Fecha: "
    celda1.id="fecha"
    ticket.appendChild(celda1);
    const celda2 = document.createElement("td")
    celda2.innerText=" "+hoy.toLocaleDateString()+" ";
    ticket.appendChild(celda2);
    const celda3 = document.createElement("td")
    celda3.innerText=" Estado: "
    celda3.id="c_estado"
    ticket.appendChild(celda3);
    const celda4 = document.createElement("td")
    celda4.innerText=" Recibido para Evaluacion "
    celda4.id="estado"
    ticket.appendChild(celda4);
    const fila3 = document.createElement("tr")
    ticket.appendChild(fila3);
    const celda5 = document.createElement("td")
    celda5.innerText=" Reclamo: "
    celda5.id="nmb"
    ticket.appendChild(celda5);
    const celda6 = document.createElement("td")
    var nombre=document.getElementById("nombre_reclamo").value
    celda6.innerText=nombre
    celda6.colSpan="3"
    ticket.appendChild(celda6);
    const fila4 = document.createElement("tr")
    ticket.appendChild(fila4);
    const celda7 = document.createElement("th")
    celda7.innerText=" Descripcion: "
    celda7.id="dsc"
    celda7.colSpan="4"
    ticket.appendChild(celda7);
    const fila5 = document.createElement("tr")   
    ticket.appendChild(fila5);
    const celda8 = document.createElement("th")
    var descripcion=document.getElementById("descripcion_reclamo").value
    
    celda8.colSpan="4"
    celda8.innerText=descripcion
   
    ticket.appendChild(celda8);
    const fila6 = document.createElement("tr")   
    ticket.appendChild(fila6);
    const celda9 = document.createElement("th")
    celda9.colSpan="4"
    celda9.innerHTML="Hoteles Al Toque"+ "<img src='../icons/hat.png' width=20></img>"
    celda9.id="nmbrPortal"
    ticket.appendChild(celda9);
    contenedorTicket.appendChild( ticket);

}

function generarTicket(){
    document.getElementById('tituloSector').style.display = 'none';
    var options = {
    };
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML($("#contenedorTicket"), 15, 15, options, function() {
      pdf.save('Ticket.pdf');
    });
   

}

function pieDePagina() {
    const pie_pagina = document.createElement("footer")
    pie_pagina.id = "pie_pagina"
    document.body.appendChild(pie_pagina)

    const info = document.createElement("a")
    info.id="info"
    info.href="#"
    info.innerText="contacto: correo electronico - derechos de autor"
    pie_pagina.appendChild(info)

}

function cambiarIdioma(event){
    let idioma=event.target.value;
    console.log(idioma)
    if(idioma=="Eng 🇬🇧"){
        document.getElementById("enlace_iniciar_sesion").textContent="Log in"
        document.getElementById("enlace_inicio").textContent="Home"
        document.getElementById("enlace_registrarse").textContent="Sign up"
        document.getElementById("enlace_contactanos").textContent="Contact us"
        document.getElementById("label").textContent="Language: "
        document.getElementById("h2").textContent="Claims"
    
        document.getElementById("info").textContent="contact: mail - copyright"

        if(document.getElementById("form_reclamo").style.display == 'none')
        {
           
            document.getElementById("tituloSector").textContent=" New Claim Made ✅"
            document.getElementById("titulo").textContent="Claim Ticket"
            document.getElementById("fecha").textContent="Date: "
            document.getElementById("c_estado").textContent="Status: "
            document.getElementById("estado").textContent="Received for Evaluation"
            document.getElementById("nmb").textContent="Claim: "
            document.getElementById("dsc").textContent="Description: "  
            document.getElementById("btn-ticket").textContent="Generate Ticket " 
        }
        if(document.getElementById('botonReclamo').style.display == 'none'){
            document.getElementById("label_n").textContent="Name:"
            document.getElementById("nombre_reclamo").placeholder="Enter title ..."
            document.getElementById("label_d").textContent="Description:"
            document.getElementById("descripcion_reclamo").placeholder="Detail the reason for the claim ..."
            document.getElementById("confirmar").textContent="Confirm"
        }else{
            document.getElementById("botonReclamo").textContent="Make New Claim"
        }
       
    }else{
        document.getElementById("enlace_iniciar_sesion").textContent="Iniciar Sesion"
        document.getElementById("enlace_inicio").textContent="Inicio"
        document.getElementById("enlace_registrarse").textContent="Registrarse"
        document.getElementById("enlace_contactanos").textContent="Contactenos"
        document.getElementById("label").textContent="Idioma: "
        document.getElementById("h2").textContent="Reclamos"
        document.getElementById("info").textContent="contacto: correo electronico - derechos de autor"
        if(document.getElementById("form_reclamo").style.display == 'none')
        {
            document.getElementById("tituloSector").textContent=" Nuevo Reclamo Realizado ✅"
            document.getElementById("titulo").textContent="Ticket de Reclamo"
            document.getElementById("fecha").textContent="Fecha: "
            document.getElementById("c_estado").textContent="Estado: "
            document.getElementById("estado").textContent="Recibido para Evaluacion"
            document.getElementById("nmb").textContent="Reclamo: "
            document.getElementById("dsc").textContent="Descripcion: "  
            document.getElementById("btn-ticket").textContent="Generar Ticket " 
        }
        if(document.getElementById('botonReclamo').style.display == 'none'){
    
            document.getElementById("label_n").textContent="Nombre: "
            document.getElementById("nombre_reclamo").placeholder="Ingresar titulo..."
            document.getElementById("label_d").textContent="Descripcion:"
            document.getElementById("descripcion_reclamo").placeholder="Detallar el motivo del reclamo ..."
            document.getElementById("confirmar").textContent="Confirmar"
        }else{
            document.getElementById("botonReclamo").textContent="Realizar Nuevo Reclamo"

        }

    }
}