// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo(){
        //obtenemos el nombre del amigo del cambo de texto
        const nombreInput = document.getElementById('amigo');
        //tomamos el valor de este
        const nombreAmigo=nombreInput.value;

        //verificamos que el campo no este vacio
        if (nombreAmigo==='') {
            alert('por favor, escribe el nombre de un amigo');
            return;
            
        }
        //agregamos el nombre del amigo al array
        amigos.push(nombreAmigo);
        //mostramos el array
        console.log(amigos);
        //limpiar el campo para el nombre siguiente
        nombreInput.value='';
    }