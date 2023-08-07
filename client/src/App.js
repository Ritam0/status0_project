import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import DoctorsList from './components/doctors';


const App=()=>  {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Home/>} className='home-page'/>
          <Route path="/About" element={<About/>} className='about-page'/>
          <Route path="/doctors" element={<DoctorsList/>} className='Doctorlist'/>   
       </Routes>
        
    </>
  );
}
export default App;
