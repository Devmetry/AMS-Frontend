
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
import Orders from './Components/Orders/Orders';
import Sales from './Components/Sales/Sales';
import Analytics from './Components/Analytics/Analytics';
import SignOut from './Components/SignOut/SignOut';

import UserNew from './Components/UserNew/UserNew';
import OrderNew from './Components/OrderNew/OrderNew';
import ProductNew from './Components/ProductNew/ProductNew';






function App() {
  return (
    <div className="App">
      <Navigation/>
     

      <BrowserRouter>
        <Switch>
          {/* <Route path="/"><Dashbord/></Route> */}
          <Route path="/login"> <Login/> </Route>
          <Route path="/sign"> <Signup/> </Route>
          <Route path="/dash"> <Dashbord/> </Route>
          <Route path="/inventory"> <Inventory/> </Route>
          <Route path="/orders"> <Orders/> </Route>
          <Route path="/sales"> <Sales/> </Route>
          <Route path="/analytics"> <Analytics/> </Route>
          <Route path="/IProduction"> <IProduction/> </Route>
          <Route path="/SignOut"> <SignOut/> </Route>
          <Route path="/OrderNew"> <OrderNew/> </Route>
          <Route path="/UserNew"> <UserNew/> </Route>
          <Route path="/ProductNew"> <ProductNew/> </Route>
         
         
          {/* <IProduction/> */}
         
        
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
