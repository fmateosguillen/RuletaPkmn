// Función para realizar una tirada
function realizarTirada(nombre) {
    const randomNumber = Math.random() * 100;
    let resultado;

    if (randomNumber < 60) {
        resultado = 1; // 60%
    } else if (randomNumber < 85) {
        resultado = 2; // 25%
    } else if (randomNumber < 95) {
        resultado = 3; // 10%
    } else {
        resultado = 4; // 5%
    }

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `El número seleccionado por ${nombre} es: ${resultado}`;

    // Obtener la hora actual en España (UTC+2 en horario de verano)
    const fecha = new Date();
    // Convertir a hora local y formatear
    const options = { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 };
    const hora = new Intl.DateTimeFormat('es-ES', options).format(fecha);

    // Añadir el resultado y la hora al historial
    const listaHistorico = document.getElementById('lista-historico');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `Tirada de ${nombre}: ${resultado} <span class="hora">${hora}</span>`; // Agregar la hora

    listaHistorico.appendChild(nuevoElemento);
}

// Asignar el evento 'click' a cada botón
document.getElementById('tiradaAlberto').addEventListener('click', () => realizarTirada('Alberto'));
document.getElementById('tiradaDani').addEventListener('click', () => realizarTirada('Dani'));
document.getElementById('tiradaIvan').addEventListener('click', () => realizarTirada('Iván'));
document.getElementById('tiradaJavi').addEventListener('click', () => realizarTirada('Javi'));
document.getElementById('tiradaJose').addEventListener('click', () => realizarTirada('José'));