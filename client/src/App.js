import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';


const App=()=>  {
  return (
    <>
        
        <Routes>
          <Route path="/" element={<Home/>} className='home-page'/>
          <Route path="/About" element={<About/>} className='about-page'/>   
       </Routes>
        
    </>
  );
}
export default App;
