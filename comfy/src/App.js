import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './page/Homepage'
import './App.css';
import ContactUs from './ContactUs';
import Register from './page/Register';
import Login from './page/Login';
import Forgotten from './page/Forgotten';
import Productdetail from './page/Productdetail';
import Allproduct from './page/Allproduct';
import Localproduct from './page/Localproduct';
import Importproduct from './page/Importproduct';
import Delivery from './page/Delivery';
import Payment from './page/Payment';
import Orderconfirm from './page/Orderconfirm';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/homepage"  component={Homepage}/>
      <Route path="/register"  component={Register}/>
      <Route path="/login"  component={Login}/>
      <Route path="/forgot"  component={Forgotten}/>
      <Route path="/localproducts/productname"  component={Productdetail}/>
      <Route path="/allproducts"  component={Allproduct}/>
      <Route path="/localproducts"  component={Localproduct}/>
      <Route path="/importproducts" component={Importproduct}/>
      <Route path="/cart/delivery" component={Delivery}/>
      <Route path="/cart/delivery-payment" component={Payment}/>
      <Route path="/cart/delivery-payment-confirm" component={Orderconfirm}/>
      <Route path="/contactus"  component={ContactUs}/>
      <Route path="/contact" component={Contact}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
