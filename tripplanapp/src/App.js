
import './App.css'
import Loginpage from './Loginpage';
import Re from './Re.js';
import  Home  from './Home.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hotel from './Hotel';
import Categery from './Categery.js';
import Currentoffer from './Currentoffer.js';
import Hotelform from './Hotelform';
import Feedback from './Feedback'
import Onedaytripplan from './Onedaytripplan'
import Maduraionedaytrip from './Maduraionedaytrip'
import Kanniyakumarione from './Kanniyakumarione'
import Chennaiondaytrip from './Chennaiondaytrip'
import Childrentrip from './Childrentrip'
import Educationtrip from './Educationtrip'
import Familytrip from './Familytrip'
import Loru from './Loru';
import Admin from './Admin';
import Alogin from './Alogin';
import Travel from './Travel';
import Train from './Train';
import Bus from './Bus';
import Flight from './Flight';
import Busform from './Busform';
import Cancle from './Cancle';
import Deletebus from './Deletebus'
import Showdata from './Showdata';
import Admintrvel from './Admintrvel';
import Admincat from './Admincat';
import Adminhotel from './Adminhotel.jsx';
import Adminfeedback from './Adminfeedback.jsx'
import Whe from './Whe.js'
import Update from './Update.js'
import Chatbox from './Chatbox.js'
import Chatbox2 from './Chatbox2.js'

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Loru/>}></Route>
          <Route path='/Re' element={<Re/>}></Route>
          <Route path='/Loginpage' element={<Loginpage/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Hotel' element={<Hotel/>}></Route>
          <Route path='/Categery' element={<Categery/>}></Route>
          <Route path='/currentoffer' element={<Currentoffer/>}></Route>
          <Route path='/Hotelform' element={<Hotelform/>}></Route>
          <Route path='/Feedback' element={<Feedback/>}></Route>
          <Route path='/Onedaytripplan' element={<Onedaytripplan/>}></Route>
          <Route path='/Maduraionedaytrip' element={<Maduraionedaytrip/>}></Route>
          <Route path='/Kanniyakumarione' element={<Kanniyakumarione/>}></Route>
          <Route path='/Chennaiondaytrip' element={<Chennaiondaytrip/>}></Route>
          <Route path='/Childrentrip' element={<Childrentrip/>}></Route>
          <Route path='/Educationtrip' element={<Educationtrip/>}></Route>
          <Route path='/Familytrip' element={<Familytrip/>}></Route>
          <Route path='/Admin' element={<Admin/>}></Route>
          <Route path='/Alogin' element={<Alogin/>}></Route>
          <Route path='/Travel' element={<Travel/>}></Route>
          <Route path='/Bus' element={<Bus/>}></Route>
          <Route path='/Train' element={<Train/>}></Route>
          <Route path='/Flight' element={<Flight/>}></Route>
          <Route path='/Busform' element={<Busform/>}></Route>
          <Route path='/Cancle' element={<Cancle/>}></Route>
          <Route path='/Deletebus' element={<Deletebus/>}></Route>
          <Route path='/Showdata' element={<Showdata/>}></Route>
          <Route path='/Admintrvel' element={<Admintrvel/>}></Route>
          <Route path='/Admincat' element={<Admincat/>}></Route>
          <Route path='/Adminhotel' element={<Adminhotel/>}></Route>
          <Route path='/Adminfeedback' element={<Adminfeedback/>}></Route>
          <Route path='/Whe' element={<Whe/>}></Route>
          <Route path='/Update' element={<Update/>}></Route>
          <Route path='/Chatbox' element={<Chatbox/>}></Route>
          <Route path='/Chatbox2' element={<Chatbox2/>}></Route>

          </Routes>
          </div>
          </BrowserRouter>
    // <Summa/>
   
  );
}

export default App;
