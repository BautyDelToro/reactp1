import './Ejemplo.css';

export default function  Ejemplo (){
    const vida =42; //const no deja reescribir la varriable, se define sy nunca mas cambia
    let clase="";
    if(vida===42){
        clase="correcto";
    }else{
        clase="incorrecto";
    }
    
    return(
    <p className={clase}>el sentido de la vida es {vida}</p>
    )
}