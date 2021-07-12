
import './App.css';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Navigation from './Components/navigator/Navigation';
import Dashbord from './Components/dashBord/Dashbord';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import{
  Switch,
  Route
} from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import IProduction from './Components/I-Production/IProduction';



function App() {
  return (
    <div className="App">
      <Navigation/>

      <BrowserRouter>
        <Switch>
          <Route path="/login"> <Login/> </Route>
          <Route path="/sign"> <Signup/> </Route>
          <Route path="/dash"> <Dashbord/> </Route>
          <Route path="/inventory"> <Inventory/> </Route>
          <IProduction/>
       
        </Switch>
      </BrowserRouter>
    
    

    </div>
  );
}

export default App;
