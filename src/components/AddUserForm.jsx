import React from 'react'
import { useForm } from 'react-hook-form' //llamamos la libreria para trabajar con formularios

const AddUserForm = (props) => {
    
    /*
     * Creamos una funcion de Estado, de la libreria para manejar datos de formulario,
    con esta libreria podemos validar los campos e imprimir errores de
    validaciones. handleSubmit nos sirve para agregar nuestro formulario
     con el name del formulario nosotros podemos enviarlo al objeto
    */
    //State
    const{register, errors, handleSubmit} = useForm();
    
    /*
    onSubmit es una funcion para enviar los datos que hay en los
    campos del formulario,esta funcion se va a utilizar en la etiqueta 
    form
    */
    const onSubmit = (data) => {
        console.log(data)
    }


    return (  
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name"  />
        <label>Username</label>
        <input type="text" name="username"  />
        <button>Add new user</button>
        </form>
        
    );
}
 
export default AddUserForm;