import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import jhonbaironfigueroalogo from './imagenes/jhonbaironfigueroalogo.png';


function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className='App'>
      <div className='jhonbairon-logo-contenedor'>
        <img className='jhonbairon-logo' 
          src={jhonbaironfigueroalogo}
          alt='Logo de Jhon Bairon' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics='5'  />
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
