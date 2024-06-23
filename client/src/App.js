
import Home from './pages/Home';
import PieChart from "../src/pages/pieChart";
import {Route,Router,Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/analytics' element={<PieChart/>}/>

    </Routes>
    
  );
}

export default App;
