import React from 'react'; // Importa React
import '../hojas-de-estilo/Boton.css'; // Importa los estilos del botón

// Define el componente Boton
function Boton({ texto, esBotonDeClic, manejarClic }) {
    // Renderiza un botón con un texto, un estilo dependiendo de si es un botón de clic o de reinicio, y una función de manejo de clics
    return (
        <button
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;