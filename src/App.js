import Admin from './Admin/Admin';
import './App.css';
import Client from './Client/Client';
import Login from './Login/Login';
import {Route,Routes} from 'react-router-dom'
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/Client' element={<Client />} />
      <Route path='/Admin' element={<Admin />} />
      <Route path='/Cards' element={<Cards/>} />


      
     
      </Routes>
      </div>
    // <div>
    // <Admin />
    // <Client/>
    // </div>

  );
}

export default App;
