// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);

    if (nuevoAmigo === "") {
        alert("Inserta un nombre.");
    }
    amigos.push(nuevoAmigo);
    mostrarListaAmigos();
    limpiarCaja();
    return;
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

}


function limpiarCaja () {
    document.querySelector ('#amigo').value = '';
}
