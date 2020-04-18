import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Body from './componentes/Header';
import Formulario from './componentes/Body';


function App() {
  //Define el state, conviene ponerlo aquí que es el comp. padre
  const [nombre, guardarNombre] = useState('');
  const [apellido, guardarApellido] = useState('');
  const [usuario, guardarUsuario] = useState('');
  const [email,guardarEmail ] = useState('');
  const [telefono,guardarTelefono ] = useState('');
  const [empresa,guardarEmpresa ] = useState('');
  const [contrasena,guardarcontrasena ] = useState('');
  const [confirmacion,guardarconfirmacion ] = useState('');

    return (
      <Fragment>
            <Header
                titulo="Registro de Usuario" //funcion props, se pueden agregar varios props
            />

        <div className="container">
          <Formulario 
          nombre={nombre}
          guardarNombre={guardarNombre}
          usuario={usuario}
          guardarUsuario={guardarUsuario}
          apellido={apellido}
          guardarApellido={guardarApellido}
          email={email}
          guardarEmail={guardarEmail}
          telefono={telefono}
          guardarTelefono={guardarTelefono}
          empresa={empresa}
          guardarEmpresa={guardarEmpresa}
          contrasena={contrasena}
          guardarContrasena={guardarcontrasena}
          confirmacion={confirmacion}
          guardarconfirmacion={guardarconfirmacion}    
          />
          
        </div>
        </Fragment>
    );
} 

export default App;