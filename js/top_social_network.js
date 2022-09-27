const TopSocialNetwork = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_social_network');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Socials = '';
    datos.forEach(Social => {
        Socials += `
        <hr>
        <h6>${Social.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Social.image}">
        </div>
        <h5>${Social.social_name}</h5>
        <hr>`;
    });

    document.getElementById('Social').innerHTML = Socials;
}

TopSocialNetwork();

//varialbles

var ttl1 = "𝕀𝕟 𝕥𝕙𝕖 𝕨𝕠𝕣𝕝𝕕";

document.getElementById("Titulo1");
Titulo1.innerHTML = ttl1;