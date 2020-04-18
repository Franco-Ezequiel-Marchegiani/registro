import React, {Fragment, useState } from 'react';


const Registro = (props) => {
    const {nombre, guardarNombre, apellido, guardarApellido, usuario, guardarUsuario, email, guardarEmail, telefono, guardarTelefono, empresa, guardarEmpresa, contrasena, guardarContrasena, confirmacion, guardarconfirmacion} = props;

    const[error, guardarError,  ] = useState(false);

 const guardarDatos = e => {
     e.preventDefault();
     console.log('Cargando datos...'); 

    //Validación
    if (nombre === '' || apellido === '' ||usuario === '' || email ==='' || telefono === '' || empresa === '' || confirmacion === ''){
        guardarError(true);
        console.log('Falta completar datos')
        return;

    } 
 
    if (contrasena !== confirmacion ){        
        guardarError(true)
        console.log('las contraseñas no coinciden')
        return;
    }

    //Eliminar error previo
    guardarError(false)

 
    }

    return ( //onSubmit sirve para guardar los datos que el usuario ingrese
       <Fragment>
       <form onSubmit={guardarDatos}>
            
          <div className="row">
              <div>
                  <label>Nombre </label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                      placeholder="Ingrese su Nombre" 
                      onChange={e => guardarNombre ((e.target.value ) ) }

                      //onChange permite guardar los datos recibidos
                      // <=También se puede poner la e dentro de estas llaves
                  />
              </div>
              
                <div>
                    <label>Apellido </label>
                    <input 
                    className="u-full-width"
                    type="text"
                    placeholder="Ingrese su Apellido"
                    onChange={e => guardarApellido ((e.target.value ) ) }
                    />
                </div>

                <div>
                    <label>Nombre de Usuario </label>
                    <input 
                    className="u-full-width"
                    type="text"
                    placeholder="Ingrese su Usuario"
                    onChange={e => guardarUsuario ((e.target.value ) ) }
                    />
                </div>

                <div>
                    <label>Email </label>
                    <input 
                    className="u-full-width"
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    onChange={e => guardarEmail ((e.target.value ) ) }
                    />
                </div>
                <div>
                    <label>Teléfono </label>
                    <input 
                    className="u-full-width"
                    type="number"
                    placeholder="Ingrese su N° telefónico"
                    onChange={e => guardarTelefono ((e.target.value ) ) }
                    />
                </div>

              <div>
                  <label>Empresa</label>
                  <select 
                      className="u-full-width"
                      onChange={e => guardarEmpresa ((e.target.value ) ) }
                  >
                      <option value="">Seleccionar</option>
                      <option value="1">Personal</option>
                      <option value="2">Movistar</option>
                      <option value="3">Claro</option>
                      <option value="4">Otros</option>                    
                  </select>
              </div>

              <div>
                    <label>Contraseña </label>
                    <input 
                    className="u-full-width"
                    type="password"
                    onChange={e => guardarContrasena ((e.target.value ) ) }
                    />
                </div>
                <div>
                    <label>Confirmacion </label>
                    <input 
                    className="u-full-width"
                    type="password"
                    onChange={e => guardarconfirmacion ((e.target.value ) ) }
                    />
                </div>
              
              <div>
                  <input 
                      type="submit"  
                      value="Registrarte " 
                      className="button-primary u-full-width" 
                  />
              </div>

          </div>
  </form>

    { (error) ? <p className="error">Todos los campos son Obligatorios</p> : '' }
        <br></br>
    { (error) ? <p className="error">Recordá que la contraseña debe coincidir con la confirmación</p> : '' }
 
  </Fragment>  //type text o number define la casilla
  //En caso de que error marque como true mostrará error, caso contrario no mostrará nada
    );
}

export default Registro;
