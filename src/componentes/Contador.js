import React from 'react'; // Importa React
import '../hojas-de-estilo/Contador.css'; // Importa los estilos del contador

// Define el componente Contador
function Contador({ numClics }) { 
    
    // Renderiza un div que muestra el número de clics
    return (
        <div className='contador'> 
            {numClics}
        </div>
    );
}

export default Contador;