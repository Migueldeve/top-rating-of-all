const TopDeveloper = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_developers');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Developers = '';
    datos.forEach(Developer => {
        Developers += `
        <hr>
        <h6>${Developer.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Developer.image}">
        </div>
        <h5>${Developer.developer_name}</h5>
        <hr>`;
    });

    document.getElementById('Developer').innerHTML = Developers;
}

TopDeveloper();

//varialbles

var ttl1 = "𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣𝕤";

document.getElementById("Titulo1");
Titulo1.innerHTML = ttl1;