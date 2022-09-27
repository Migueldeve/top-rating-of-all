const TopSerieNetflix = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_series_netflix');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Netflixs = '';
    datos.forEach(Netflix => {
        Netflixs += `
        <hr>
        <h6>${Netflix.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Netflix.image}">
        </div>
        <h5>${Netflix.serie_name}</h5>
        <hr>`;
    });

    document.getElementById('Netflix').innerHTML = Netflixs;
}

TopSerieNetflix();

//-------------------

const TopSerieHbo = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_series_hbo');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Hbos = '';
    datos.forEach(Hbo => {
        Hbos += `
        <hr>
        <h6>${Hbo.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Hbo.image}">
        </div>
        <h5>${Hbo.serie_name}</h5>
        <hr>`;
    });

    document.getElementById('Hbo').innerHTML = Hbos;
}

TopSerieHbo();

//--------------

const TopSerieDisneyPlus = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_series_disney_plus');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Disneys = '';
    datos.forEach(Disney => {
        Disneys += `
        <hr>
        <h6>${Disney.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Disney.image}">
        </div>
        <h5>${Disney.serie_name}</h5>
        <hr>`;
    });

    document.getElementById('Disney').innerHTML = Disneys;
}

TopSerieDisneyPlus();

//varialbles

var ttl1 = "𝕟𝕖𝕥𝕗𝕝𝕚𝕩";
var ttl2 = "𝕙𝕓𝕠";
var ttl3 = "𝕕𝕚𝕤𝕟𝕖𝕪 +";

document.getElementById("Titulo1");
Titulo1.innerHTML = ttl1;

document.getElementById("Titulo2");
Titulo2.innerHTML = ttl2;

document.getElementById("Titulo3");
Titulo3.innerHTML = ttl3;