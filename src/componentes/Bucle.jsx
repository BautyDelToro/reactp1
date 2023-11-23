export default function Bucle(){
    const numeros=[11,22,3,4,55,6,7];
    return( //return de bucle
    <>
    {numeros.map((numero, index) => { //index es la opcion 3 (abajo)    
    return( //return del .map

        // opcion 1 usar un valor random (Math.random)
        // opcion 2 usar el numero si se que no se repite (numero)
        // opcion 3 usar el indice de .map (index) 
        <p key={index}>{numero}</p>
        //la  key es necesaria para que react lo distinga, me lo pide el lenguaje y es como un id
    )    
    })}
    </>
    )
}