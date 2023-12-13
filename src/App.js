import './App.css'; // Importa los estilos de la aplicación
import Boton from './componentes/Boton'; // Importa el componente Boton
import Contador from './componentes/Contador'; // Importa el componente Contador
import jhonbaironfigueroalogo from './imagenes/jhonbaironfigueroalogo.png'; // Importa una imagen
import { useState } from 'react'; // Importa el hook useState de React

// Define el componente App
function App() {

  // Define el estado numClics y su función de actualización setNumClics, inicializado en 0  const [numClics, setNumClics] = useState(0);
  const [numClics, setNumClics] = useState(0);

  // Define una función para manejar los clics, que incrementa numClics en 1
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  // Define una función para reiniciar el contador, que establece numClics en 0
  const reiniciarContador = () => {
    setNumClics(0);
  };

  // Renderiza la aplicación
  return (
    <div className='App'>
      <div className='jhonbairon-logo-contenedor'>
        <img className='jhonbairon-logo' 
          src={jhonbaironfigueroalogo}
          alt='Logo de Jhon Bairon' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}  />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
