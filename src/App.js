
import './App.css';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Navigation from './components/navigator/navigation';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import{
  Switch,
  Route
} from 'react-router-dom';
import Inventory from './components/inventory/inventory';
import Production from './components/inventory/_production';



function App() {
  return (
    <div className="App">
      <Navigation/>

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login/> 
          </Route>
          <Route path="/sign">
            <Signup/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Production />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
