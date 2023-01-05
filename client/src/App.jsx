
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navbar1 from './navbar';
import Home from './home'
import Plant from './plants';
import Disease from './disease';
import PlantForm from './PlantForm/PlantForm';
import DiseaseForm from './DiseaseForm/DiseaseForm';
import Login from './components/Login'
import { UserAuthContextProvider } from './context/UserAuthContext';
import SignUp from './components/Signup'
import Logout from './components/Home';
 import ProtectedRoutes from "./components/ProtectedRoute"
function App() {
  return (
    <div>
        <Router>
          
          <UserAuthContextProvider>
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
          <Route path='/buyplant' element={<ProtectedRoutes><Plant/></ProtectedRoutes>} />
          <Route path='/addplant' element={<ProtectedRoutes><PlantForm/></ProtectedRoutes>} />
          <Route path='/disease' element={<ProtectedRoutes><Disease/></ProtectedRoutes>} />
          <Route path='/adddisease' element={<ProtectedRoutes><DiseaseForm/></ProtectedRoutes>} />
          <Route path='/logout' element={<Logout/>}></Route>
          </Routes>
          </UserAuthContextProvider>
        </Router>

    </div>
  );
}

export default App;
