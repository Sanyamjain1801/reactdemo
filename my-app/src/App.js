
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Signup from './component/Signup';
import Login from './component/Login';

function App() {
  
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const togglemode1 = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021840';
      showAlert(" Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode}  togglemode={togglemode1}/>
    <Alert alert1={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode} heading='About Us'/>}>
        </Route>
        <Route path="/" element={<TextForm heading='Enter the Text' showAlert={showAlert} mode={mode} />}> 
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App; 

  

          
          

        



        
    
    
        
