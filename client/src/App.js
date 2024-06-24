
import Home from './pages/Home';
import PieChart from "../src/pages/pieChart";
import {Route,Router,Routes} from "react-router-dom";
import ContactForm from './pages/ContactForm';
import FinanceManager from './pages/FinanceManager';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/analytics' element={<PieChart/>}/>
      <Route path="/contact" element={<ContactForm/>}/>
      <Route path="/finance" element={<FinanceManager/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/inventory" element={<Inventory/>}/>
    </Routes>
    
  );
}

export default App;
