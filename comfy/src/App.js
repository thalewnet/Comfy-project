import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './page/Homepage';
import Register from './page/Register';
import Login from './page/Login';
// import Forgotten from './page/Forgotten';
import Productdetail from './page/Productdetail';
import Allproduct from './page/Allproduct';
import Localproduct from './page/Localproduct';
import Importproduct from './page/Importproduct';
import Delivery from './page/Delivery';
import Payment from './page/Payment';
import Orderconfirm from './page/Orderconfirm';
import Contact from './page/Contact';
import Myorder from './page/Myorder';
import Cart from './page/Cart';
import Footercomponent from './component/Footercomponent';
import Navbarcomponent from './component/Navbarcomponent';
import Adminupdatedproduct from './page/Adminupdateproduct';
import Adminorderstatus from './page/Adminorderstatus';
import Adminordercheck from './page/Adminordercheck';
import AdminCreateProduct from './page/AdminCreateProduct';
import EditProductDetail from './page/EditProductDetail';
import AdminAllproduct from './page/AdminAllproduct';
import { OrderProvider } from './contexts/orderContext';
import { ProductProvider } from './contexts/productContext';
import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';
import { route } from './config/config';
function App() {
  const { user } = useContext(AuthContext);

  const role = user ? user.role : 'guest';

  return (
    <div className="App">
      <BrowserRouter>
        <OrderProvider>
          <ProductProvider>
            <Navbarcomponent />
            <Switch>
              {route[role].map((item, idx) => (
                <Route key={idx} path={item.path} component={item.component} />
              ))}
              {/* GUEST */}
              {/* <Route path="/productname/:id" component={Productdetail} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/allproducts" component={Allproduct} />
              <Route path="/importproducts" component={Importproduct} />
              <Route path="/localproducts" component={Localproduct} />
              <Route path="/contact" component={Contact} /> */}
              {/* USER */}
              {/* <Route
                path="/editcart/:productId/:cartId"
                component={EditProductDetail}
              />
              <Route path="/payment" component={Payment} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/cart" component={Cart} />
              <Route path="/myorder" component={Myorder} />
              <Route path="/confirm" component={Orderconfirm} /> */}

              {/* ADMIN */}
              {/* <Route
                path="/admin-create-product"
                component={AdminCreateProduct}
              />
              <Route
                path="/admin-product-update/:id"
                component={Adminupdatedproduct}
              />
              <Route path="/admin-orderstatus" component={Adminorderstatus} />
              <Route path="/admin-ordercheck/:id" component={Adminordercheck} />
              <Route path="/admin-allproducts" component={AdminAllproduct} />
              <Route path="/test2" component={Adminordercheck} />
              <Route path="/" component={Homepage} /> */}
              {/* <Route path="/forgot" component={Forgotten} /> */}
            </Switch>
            <Footercomponent />
          </ProductProvider>
        </OrderProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
