import React,{Fragment,useState, useEffect} from 'react';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';

function App() {

  //Guardando usuarios en local, y si no hay ningun usuario creado, que se
  //inicialice vacio
  let usuariosIniciales = JSON.parse(localStorage.getItem('usuarios'));
  if(!usuariosIniciales){
    usuariosIniciales = [];
  }

  //state de usuarios
  const [usuarios, listarUsuarios]= useState(usuariosIniciales);

  const ListandoUsuarios = usuario => {
    listarUsuarios([
      ...usuarios,
      usuario
    ]);
  }

  //eliminar cita

  const eliminar = id => {
    const nuevo = usuarios.filter(usuario => (usuario.id !== id));
    listarUsuarios(nuevo);
  }

  //use effect

 useEffect(() => {
  let usuariosIniciales = JSON.parse(localStorage.getItem('usuarios'));
  if(usuariosIniciales){
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }else{
      localStorage.setItem('usuarios', JSON.stringify([]));
    }

}, [usuarios]);


  return (
    <Fragment>
      <div class="container">
        <div class="row">
           <div class="col">
               <Formulario
               ListandoUsuarios={ListandoUsuarios}
               />
          </div>
        <div class="col">
            <Listado
                usuarios = {usuarios}
                eliminar = {eliminar}
              />
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
