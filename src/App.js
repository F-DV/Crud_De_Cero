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
    /*variable de estado, y lo igualamos a useState y le pasamos los parametros 
    que declaramos en el array de objetos como valores iniciales.
    y el estado queda con informacion 
    */
    const [users, setUsers] = useState(usersData); 


    /*
    Creamos funcion de flecha para agregar usuarios
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

  return (
    <div className='container'> 
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">{/*columna 1 */}
        <h2>Add user</h2>
        <AddUserForm />
      </div>
      <div className='flex-large'>{/*columna 2 */}
        <h2>View users</h2>
        {/*Agregamos el componente con la tabla y le pasamos los usuarios  que tenemos en el estado 
        como props */}
        <UserTable users={users}/>
      </div>
    </div>
  );
}
export default App;
