import './Producto.css'

export default function Producto ({
    titulo, imagen, precioanterior, precioactual, precioenvio 

}){
    // const imagen  = "imagenes/diadema.jpg";
    // const titulo = "Diadema Rowena Ravenclaw"
    // const precioanterior  = 45000;
    // const precioactual= 35000;
    // const precioenvio=0;

    return(
        <div className='producto'>
        <h2>{titulo}</h2>
        <img src={imagen} alt="Didema Rowena Ravenclaw"/>
        <p className='precioanterior'>${precioanterior}</p>
        <p >${precioactual}</p>
        <input type="button" value="¡Comprar!" />
        {precioenvio===0 &&
        <p className='envioGratis'>¡Envio gratis!</p>
        }
        {precioenvio!==0 &&
        <p>Envio: ${precioenvio}</p>
        }
        </div>
    )
}