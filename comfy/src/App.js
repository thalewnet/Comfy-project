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
import Myorder from './page/Myorder';
import Cardcart from './component/Cardcart';
import Dropdown from './component/Maindropdown';
import Overlay from './page/Overhomepage';
import Cart from './page/Cart';
import Admintable from './component/Admintable';
import Adminproduct from './component/Adminproduct';
import Logincomponent from './component/Logincomponent';
import Registercomponent from './component/Registercomponent';
import Footer from './component/Footer';
import Footercomponent from './component/Footercomponent';
import Navbarcomponent from './component/Navbarcomponent';
import Card2 from './component/Card2';
import Updatedproduct from './page/Updatedproduct';
import Uploadimg from './component/Uploadimg';
import Cartdetailcomponent from './component/Cartdetailcomponent';
import Adminupdatedproduct from './page/Adminupdateproduct';
import Adminorderstatus from './page/Adminorderstatus';
import Adminorderedit from './component/Adminorderedit';
import Adminordercheck from './page/Adminordercheck';

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
      <Route path="/cart" component={Cart}/>
      <Route path="/cart-delivery" component={Delivery}/>
      <Route path="/cart-delivery-payment" component={Payment}/>
      <Route path="/cart-delivery-payment-confirm" component={Orderconfirm}/>
      <Route path="/contactus"  component={ContactUs}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/myorder" component={Myorder}/>\
      <Route path="/admin-product-update" component={Adminupdatedproduct}/>
      <Route path="/admin-orderstatus" component={Adminorderstatus}/>
      <Route path="/admin-ordercheck" component={Adminordercheck}/>
      <Route path="/test" component={Adminorderstatus}/>
      <Route path="/test2" component={Adminordercheck}/>
      
      
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
