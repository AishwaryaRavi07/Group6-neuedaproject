
import Home from './pages/Home';
import PieChart from "../src/pages/pieChart";
import {Route,Router,Routes} from "react-router-dom";
import ContactForm from './pages/ContactForm';
import FinanceManager from './pages/FinanceManager';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

// import "./App.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/analytics' element={<PieChart/>}/>
      <Route path="/contact" element={<ContactForm/>}/>
      <Route path="/transaction" element={<FinanceManager/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      
    </Routes>
    
  );
}

export default App;
