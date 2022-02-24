import React from 'react'

{/*
Parammos los props que enviamos desde el hook de App.js

*/}
const UserTable = (props) => {
  
    /**Imprimimos los props que estamos recibiendo de Ap´p.js */
  console.log(props.users)
    return (  
        <table>{/*Estructura de Tabla */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {/*ya que tenemos el props recibido, lo podemos iterar y utilizar
            dentro del parentesis despues de user ingreamos todo lo que queremos que se devuelva, 
            en este caso quiero que la estructura de tabla se devuelva tantas veces como usuarios 
            alla */}
            {
                /**pregunta que si la lista users es mayor a 0 entonces realiza el map sigiente
                 * si no (que esta al final del map) retornamos otro <tr>
                 */
                props.users.length > 0?
                props.users.map(user => (
                
                <tr key={user.id}>{/* pintara los datos, correspondientes a este id en el array */}
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                    <button className="button muted-button">Edit</button>
                    <button 
                        className="button muted-button"
                        /*
                            Utilizamos la otra funcion que me trae el props
                            para eliminar usuario, la pasamos por medio de una funcion de flecha
                            para que no se ejecute inmediatamente se pinte, si no cuando el
                            usuario presion el boton
                        */
                        onClick={() => {props.deleteUser(user.id)}} 
                    >Delete</button>
                    </td>
                </tr>
                )) : <tr>
                        <td colSpan={3}>No users</td> {/**Si la lista no tiene datos  me restornas este tr */}
                    </tr>
            }
          
        </tbody>
      </table>
    );
}
 
export default UserTable;