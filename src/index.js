import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM
import './index.css'; // Importa los estilos globales
import App from './App'; // Importa el componente App

// Crea una raíz de React en el elemento con id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderiza la aplicación en la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

