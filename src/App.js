import React, {useState} from 'react'; //Importamos la variable de estado useState
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';    //Libreria para generar ids aleatorios
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

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

  /**Creamos un estado para Editar usuario y saber si 
   * pintamos el formulario de edicion o el normal*/
  const [editing,setEditing] = useState(false);


  /**
   * Variable estado apra modificar el usuario, lo inicializamos
   * como un objeto de usuario pero con sus campos vacios, estos campos bienen de
   * la tabla del usuario que se quiere modificar
   */
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  /**
   * FUNCION Donde recibimos los parametros del usuario que deseamos
   * modificar 
   */
  const editRow = (user) => {
    setEditing(true); //cuadno presionemos el boton de editar, enviara true a setEditin lo que hara que pinte el formulario de editar
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  /**
   * FUNCION que se encarga de modificar los usuarios
   * -recibimos un id, y los datos correspondientes a ese id
   */
  const updateUser = (id, updateUser) => {
    setEditing(false); //cambiamos a false editing para pintar denuevo el formulario de agregar usuarios
    
    /**
     * modificamos el usuario
     * -recorremos los usuarios con map
     * - a cada iteracion preguntamos si el id coincide con el usuario
     * al que se le dio click en edit,
     * - si councide pintamos el updateuser y si no , que me siga pintando el mismo
     */
    setUsers(users.map(user => (user.id == id ? updateUser : user)))
  }

  return (
    <div className='container'> 
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">{/*columna 1 */}
        {
          editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm 
              currentUser={currentUser}
            />
          </div>
          ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}/>
          </div>
          )
        }
        
        
      </div>
      <div className='flex-large'>{/*columna 2 */}
        <h2>View users</h2>
        {/*Agregamos el componente con la tabla y le pasamos los usuarios  que tenemos en el estado 
        como props */}
        <UserTable 
        users={users} 
        deleteUser={deleteUser} 
        editRow={editRow}
        />
        
      </div>
    </div>
  );
}
export default App;
