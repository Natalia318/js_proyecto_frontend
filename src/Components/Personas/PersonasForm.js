
import react, {Component} from "react";
import axios from "axios";

class PersonasForm extends Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    submitNuevaPersona( event){
        event.preventDefault();
        // Hacer petición via axios
        axios.post('http://localhost:5000/personas',{
                                                        nombre: this.refs.nombre.value,
                                                        apellido: this.refs.apellido.value,
                                                        email: this.refs.email.value,
                                                        empresa: this.refs.empresa.value,
                                                        telefono: this.refs.telefono.value,
                                                        imagen: this.refs.imagen.value
                                                    }
                                                   
            ).then(respuesta=> console.log(respuesta.data))
            .catch(error => console.log(error))
        
    }

    render(){
        return(
            <div className="row">
                <h4 className="center"> Nuevo Cantante</h4>
            <form className="col s11 ml2" >
              <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                  <input  id="nombre" ref="nombre" type="text" ></input>
                  <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                  <input id="apellido" ref="apellido" type="text"></input>
                  <label htmlFor="apellido">Apellido</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">mail</i>
                  <input  id="email" ref="email" type="text" ></input>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                <i class="material-icons prefix">business</i>
                  <input id="empresa" ref="empresa" type="text"></input>
                  <label htmlFor="empresa">Empresa</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                  <input  id="telefono" ref="telefono" type="text" ></input>
                  <label htmlFor="telefono">Telefono</label>
                </div>
                <div className="input-field col s6">
                <i className="material-icons prefix">Url de foto</i>
                  <input  id="imagen" ref="imagen" type="text" ></input>
                  <label htmlFor="imagen">Imagen</label>
                </div>
                
        
              </div>
              <div className="input-field col s6">
                <button class="btn waves-effect orange accent-4" type="submit" name="action" onClick={this.submitNuevaPersona.bind(this)}>Registrar
                    <i class="material-icons right">send</i>
                </button>
                </div>
            </form>
          </div>
        )
    }
}
export default PersonasForm