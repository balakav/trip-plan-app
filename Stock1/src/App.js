import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import Re from './Re.js'
import Home from './Home.js'
import In from './In.js'
import Order from './Order.js';
import Otp from './Otp.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Re' element={<Re/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/In' element={<In/>}></Route>
          <Route path='/Otp' element={<Otp/>}></Route>
          
          </Routes>
          </div>
          </BrowserRouter>
  );
}

export default App;
