import react from "react";

const PersonasLista = (props) =>{
    
   
    return(
    <>
        <ul className="collection amber darken-1 ">
        <li className="collection-hearder center"><h5>Bandas de Kpop</h5></li>
        {
            props.lista.map((elemento)=>{
                return(
                    <li className="collection-item"
                     key={elemento._id}
                     
                    ><i class="material-icons left"
                        onClick={props.actualizarPersona.bind(this, elemento)}
                        >visibility</i>
                        {elemento.nombre}
                        <label> </label>
                        {elemento.apellido}
                     
                        
                        <i className="material-icons right " 
                         onClick={ props.deleteBanda.bind(this,elemento)}
                        >delete</i>

                    </li>   
                )
            })
        }
        </ul>
    </>
    )
}
export default PersonasLista;