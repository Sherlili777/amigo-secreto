// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);

    if (nuevoAmigo === "") {
        alert("Inserta un nombre.");
    }
    amigos.push(nuevoAmigo);
    limpiarCaja()
    return;
}


function limpiarCaja () {
    document.querySelector ('#amigo').value = '';
}
