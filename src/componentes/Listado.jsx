import React,{Fragment} from 'react';

const Listado = ({usuarios, eliminar}) => {
    console.log(usuarios);
    return ( 
    <Fragment>
        <div className="container" >
        <div id="cajita" >
            <h2>Usuarios Registrados </h2>            
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Numero Teléfonico</th>
                        <th>Rol</th>
                    </tr>
                </thead>
            <tbody>
            {
                usuarios.map(usuario =>(
                    <tr>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.correo}</td>
                        <td>{usuario.numero}</td>
                        <td>{usuario.rol}</td>
                        <td>
                        <button
                        className="btn btn-primary"
                        > Actualizar </button>
                        <button
                        className="btn btn-danger"
                        onClick = { () => eliminar(usuario.id)}
                        > Eliminar </button>
                        </td>
                    </tr>
                ))
            }
           

            </tbody>
        </table>
        
    </div>
    </div>
</Fragment>
     );
}
 
export default Listado;