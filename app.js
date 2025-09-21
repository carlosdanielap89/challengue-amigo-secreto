// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //obtenemos el nombre del amigo del cambo de texto
    const nombreInput = document.getElementById('amigo');
    //tomamos el valor de este
    const nombreAmigo = nombreInput.value;

    //verificamos que el campo no este vacio
    if (nombreAmigo === '') {
        alert('por favor, escribe el nombre de un amigo');
        return;

    }
    //agregamos el nombre del amigo al array
    amigos.push(nombreAmigo);
    //mostramos el array
    console.log(amigos);
    //mostramos la lista
    actualizarLista()
    //limpiar el campo para el nombre siguiente
    nombreInput.value = '';




}

//vamos a mostrar la lista de amigos en el codigo html
function actualizarLista() {
    //obtenemos la lista del html
    const lista = document.getElementById('listaAmigos');
    //la limpiamos para evitar duplicados
    lista.innerHTML = '';
    //por cada amigo en amigos creamos un elemento li
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.append(item);

    }
}

//realizar el sortea del amigo secreto

function sortearAmigo(){
    //solo hacemos el sorteo si la lista es mayor a 2 amigos
    if (amigos.length<2){
        alert("agrega al menos 2 amigos para poder hacer el sorteo.");
        return;
    }

     //hacemos un indice aleatorio
    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    // buscamos el indice y nombre del amigo secreto
    const amigoSecreto = amigos[indiceSorteado];

    // mostramos el resultado del amigo secreto
    const resultado = document.getElementById('resultado');
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
}

