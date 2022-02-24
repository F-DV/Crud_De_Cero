import React, {useState} from 'react'; //Importamos la variable de estado useState
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';    //Libreria para generar ids aleatorios
import AddUserForm from './components/AddUserForm';

function App() {

  
    //Array de objetos que utilizaremos apra rellenar campos 
    const usersData = [
      /**uuidv4() : es una fundion de la libreria
      uuid, que sirve para generarnos ids aleatorios,
       en este caso los ponemos en le campo del id */
      { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },  
      { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
      { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]
  
    //state 
    /*VARIABLE de estado, y lo igualamos a useState y le pasamos los parametros 
    que declaramos en el array de objetos como valores iniciales.
    y el estado queda con informacion 
    */
    const [users, setUsers] = useState(usersData); 


    /*
    Creamos FUNCION de flecha para agregar usuarios
    - va a recibir como parametro un usuario
    - va a generar el id
    - una vez el id este generado, usuamos setUsers para modificar
    el array que ya teniamos y agregar al array el nuevo usuario
    */
   const addUser = (user) => {
      user.id = uuidv4()
      setUsers([
        ...users,
        user
      ])
   }
   /* FUNCION de flecha para eliminar usuarios,
   - Recibimos el id del usuario que vamos a eliminar,
   - Enviamos la funcion como props al boton de eliminar usuario
   */
  const deleteUser = (id) =>{
    //console.log(id);
    /* 
      -Utilizamos el setUsers para modificar el array 
      - hacemos un recorridos a todos los users
      - hacemos un filter de solo enciar a setUsers, los
      usuarios que no correspondan con el id enviado ya que ese sera el que se va a eliminar
      y se elimina excluyendolo del array
    */
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className='container'> 
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">{/*columna 1 */}
        <h2>Add user</h2>
        <AddUserForm addUser={addUser}/>
      </div>
      <div className='flex-large'>{/*columna 2 */}
        <h2>View users</h2>
        {/*Agregamos el componente con la tabla y le pasamos los usuarios  que tenemos en el estado 
        como props */}
        <UserTable users={users} deleteUser={deleteUser}/>
      </div>
    </div>
  );
}
export default App;
