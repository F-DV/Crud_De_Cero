import React from 'react'
import { useForm } from 'react-hook-form' //llamamos la libreria para trabajar con formularios

const EditUserForm = (props) => {
    
    /*
     * Creamos una funcion de Estado, de la libreria para manejar datos de formulario,
    con esta libreria podemos validar los campos e imprimir errores de
    validaciones. handleSubmit nos sirve para agregar nuestro formulario
     con el name del formulario nosotros podemos enviarlo al objeto
    */
    //State
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    /*
    onSubmit es una funcion para enviar los datos que hay en los
    campos del formulario,esta funcion se va a utilizar en la etiqueta 
    form
    */
    const onSubmit = (data, e) => {
        console.log(data)

        //Limpiamos campos despues de darle al boton enviar
        e.target.reset();
    }


    return (  
        <form onSubmit={handleSubmit(onSubmit)}>{/* hacemos uso del onSubmit para enviar los datos del formulario y convertirlos a objeto*/}
        <label>Name</label>

        <input type="text" name="name"
        {...register("name", { required: true })}/>{/* Preguntamos  que el campo name debe ser requerido, No puede
                                                        estar vacio y si lo esta, imprimimos en un div un mensaje de error*/}
        <div>
            {errors.name && <span>Este campo es requerido</span>}    
        </div>


        <label>Username</label>
        <input type="text" name="username" 
            {...register("username", { required: true })}/>{/* Preguntamos  que el campo name debe ser requerido, No puede
                                                                estar vacio y si lo esta, imprimimos en un div un mensaje de error*/}
        <div>
            {errors.username && <span>Este campo es requerido</span>}    
        </div>     

        <button>Edit user</button>
        </form>
        
    );
}
 
export default EditUserForm;