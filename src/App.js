
import './App.css';
import { UserCreate } from './Components/UserCreate';
import { UserDetails } from './Components/UserDetails';
import { UserEdit } from './Components/UserEdit';
import { UserList } from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList/>}></Route>
          <Route path='/useredit/:id' element={<UserEdit/>}></Route>
          
          <Route path='/userDetails/:id' element={<UserDetails/>}></Route>
          <Route path='/userCreate' element={<UserCreate/>}></Route>
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
