alert("!POR FAVOR LEER LOS TERMINOS Y CONDICIONES ANTES DE USAR ESTE SITIO WEB!")

const TerminosYcondiciones = async() => {
    const respuesta = await fetch('http://localhost:3000/Terminos_y_condiciones');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let TerminosYcondiciones = '';
    datos.forEach(TerminosYcondicione => {
        TerminosYcondiciones += `<p>${TerminosYcondicione.Terminos_y_condiciones}</p>`;
    });

    document.getElementById('Terminos').innerHTML = TerminosYcondiciones;
}

TerminosYcondiciones();

//------------------------

var ttl1 = "Terminos y condiciones"

document.getElementById("Titulo1");
Titulo1.innerHTML = ttl1;