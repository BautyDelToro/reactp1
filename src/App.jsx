// import logo from './logo.svg';
import './App.css';
import Titulo from './componentes/Titulo';
import Ejemplo from './componentes/Ejemplo';
import Producto from './componentes/Producto';
import Bucle from './componentes/Bucle';

function App() {
  return (
    <div>
      <Bucle/>
      <Titulo titulo="ola mundo" parrafo="aaa"/>
      <img src="imagenes/oli.jpg"alt="logo" />
      <Ejemplo/>
      <Producto titulo="Diadema Rowena Ravenclaw" imagen="imagenes/diadema.jpg" precioanterior={2000} precioactual={1000} precioenvio={0}/>
      <Producto titulo="Perrito (no a la venta de animales!!)" imagen="imagenes/oli.jpg" precioanterior={2000} precioactual={1000} precioenvio={0}/>
    </div>
    
  );
}

export default App;
