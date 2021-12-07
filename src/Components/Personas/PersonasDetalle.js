import react from "react";

const PersonasDetalle = ({ personita }) => {


    return(
       
        <div class="row center">
        <div class="col s12 ">
        <div class="card">
            <div class="card-image">
            <img src={personita.imagen} className="imagen"></img>
            <span class="card-title">{ personita.nombre  }  { personita.apellido } </span>
            </div>
            <div class="card-content">
            <p>Telefono:  { personita.telefono }    </p>
                    <p>Correo :   { personita.email   }    </p>
                    <p>Empresa:   { personita.empresa  }   </p>
            </div>
            
        </div>
        </div>
        </div>
    )

}
export default PersonasDetalle