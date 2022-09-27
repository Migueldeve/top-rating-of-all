const TopGameMovil = async() => {
    const respuesta = await fetch('http://localhost:3000/Top_games_movil');
    
    //console.log(respuesta);

    const datos = await respuesta.json();
    //console.log(datos);

    let Movils = '';
    datos.forEach(Movil => {
        Movils += `
        <hr>
        <h6>${Movil.id}</h6>
        <div id="pelicula">
            <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Movil.image}">
        </div>
        <h5>${Movil.game_name}</h5>
        <hr>`;
    });

    document.getElementById('Movil').innerHTML = Movils;
}

TopGameMovil();

//-------------------

// const TopGamePc = async() => {
//     const respuesta = await fetch('http://localhost:3000/Top_games_pc');
    
//     //console.log(respuesta);

//     const datos = await respuesta.json();
//     //console.log(datos);

//     let Pcs = '';
//     datos.forEach(Pc => {
//         Pcs += `
//         <hr>
//         <h6>${Pc.id}</h6>
//         <div id="pelicula">
//             <img id="poster" src="https://firebasestorage.googleapis.com/v0/b/top-rating-of-all.appspot.com/o/${Pc.image}">
//         </div>
//         <h5>${Pc.game_name}</h5>
//         <hr>`;
//     });

//     document.getElementById('Pc').innerHTML = Pcs;
// }

// TopGamePc();

//varialbles

var ttl1 = "𝕄𝕠𝕧𝕚𝕝";
var ttl2 = "ℙℂ";

document.getElementById("Titulo1");
Titulo1.innerHTML = ttl1;

document.getElementById("Titulo2");
Titulo2.innerHTML = ttl2;