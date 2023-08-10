import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import DoctorsList from './components/doctors';
import AmbulencePage from './components/ambulance';
import MedicalShopPage from './components/Medical_store';
import RegistrationForm from './components/Registration';
import LoginForm from './components/Login';

const App=()=>  {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Home/>} className='home-page'/>
          <Route path="/About" element={<About/>} className='about-page'/>
          <Route path="/doctors" element={<DoctorsList/>} className='Doctorlist'/> 
          <Route path="/ambulance" element={<AmbulencePage/>} className='ambulencepage'/>
          <Route path="/Medical_store" element={<MedicalShopPage/>} className='MedicalShopPage'/> 
          <Route path="/Registration" element={<RegistrationForm/>} className='RegistrationForm'/> 
          <Route path="/login" element={<LoginForm/>} className='RegistrationForm'/> 
       </Routes>
        
    </>
  );
}
export default App;
