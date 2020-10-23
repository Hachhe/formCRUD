import React,{Fragment} from 'react'
import uuid from 'uuid/dist/v4'
import {useFormik} from  "formik"
import * as Yup from "yup";

const Formulario = ({ListandoUsuarios}) => {

    const formik = useFormik({
        initialValues:{
            nombre:"",
            apellido:"",
            correo:"",
            numero:"",
            rol:""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("El campo es obligatorio"),
            apellido: Yup.string().required("El campo es obligatorio"),
            correo: Yup.string().email("Email incorrecto").required("El campo es obligatorio"),
            numero: Yup.string()
            .matches(/^[0-9]+$/, "El campo admite solo digitos")
            .min(11, 'Deben ser 11 caracteres')
            .max(11, 'No debe ser mayor a 11 caracteres'),
            rol: Yup.string().required("El campo es obligatorio")
        }),
        onSubmit: (e,{resetForm}) => {
            e.id = uuid();
            console.log(e);
            resetForm({e:''});
            ListandoUsuarios(e);
        },
    })



return (  

    <Fragment>
 
        <div className="container" id="caja" >
            <h2>Registrar Usuario</h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="nombre">* Nombre</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Ingrese Nombre" 
                id="first-name"
                name="nombre"
                onChange={formik.handleChange}
                value={formik.values.nombre}/>
                {
                    formik.errors.nombre ? 
                    <div className="alert alert-danger error">{formik.errors.nombre}</div>
                    : null
                }

            </div>
            <div className="form-group">
                <label > * Apellido</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Ingrese Apellido" 
                id="last-name"
                name="apellido"
                onChange={formik.handleChange}
                value={formik.values.apellido}/>
                {
                    formik.errors.apellido ? 
                    <div className="alert alert-danger error">{formik.errors.apellido}</div>
                    : null
                }
            </div>
            <div className="form-group">
                <label >* Correo</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Correo" 
                id="email"
                name="correo"
                onChange={formik.handleChange}
                value={formik.values.correo}
                />
                {
                    formik.errors.correo ? 
                    <div className="alert alert-danger error">{formik.errors.correo}</div>
                    : null
                }            
            </div>
             <div className="form-group">
                <label > Número de Teléfono: </label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Número de telf" 
                id="number"
                name="numero"
                onChange={formik.handleChange}
                value={formik.values.numero}/>
                {
                    formik.errors.numero ? 
                    <div className="alert alert-danger error">{formik.errors.numero}</div>
                    : null
                }
            </div> 
            <div className="form-group">
                <label >* Rol: </label>
                <select 
                id="inputRol" 
                className="form-control" 
                name="rol"
                onChange={formik.handleChange}
                value={formik.values.rol}
                >
                    <option>...</option>
                    <option>Docente/Administración</option>
                    <option>Estudiante</option>
                    <option>Invitado</option>

                    {
                    formik.errors.rol ? 
                    <div className="alert alert-danger error">{formik.errors.rol}</div>
                    : null
                }
                </select>
                </div>     

                <br/>
                <strong>(*) Campos Requeridos</strong>

                <div className="row justify-content-around"> 
                <button 
                    type="button"
                    className="col-4 btn btn-info btn-lg btn-responsive" 
                    id="search"
                    onClick={formik.handleReset}
                    >
                    Limpiar
                </button>
                <button 
                    type="submit"
                    className=" col-4 btn btn-info btn-lg btn-responsive" 
                    id="search"
                    >
                    Registrar
                </button>
                </div>   
                                                                       
            </form>
            </div>
        </Fragment>
    );
}
 
export default Formulario;