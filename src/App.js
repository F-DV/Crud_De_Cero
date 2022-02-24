import React from 'react';
import UserTable from './components/UserTable';


function App() {
  return (
    <div className='container'> 
      <h1>CRUD App with hooks</h1>
      <div className="flex-row">{/*columna 1 */}
        <h2>Add user</h2>
      </div>
      <div className='flex-large'>{/*columna 2 */}
        <h2>View users</h2>
        <UserTable/>{/*Agregamos codigo tabla de usertable */}
      </div>
    </div>
  );
}

export default App;
