// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar variable de tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        elementoLista.className = 'friend-item';
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Por favor, agrega algunos amigos primero.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}