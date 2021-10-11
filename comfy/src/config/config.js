import Homepage from '../page/Homepage';
import Register from '../page/Register';
import Login from '../page/Login';
import Productdetail from '../page/Productdetail';
import Allproduct from '../page/Allproduct';
import Localproduct from '../page/Localproduct';
import Importproduct from '../page/Importproduct';
import Delivery from '../page/Delivery';
import Payment from '../page/Payment';
import Orderconfirm from '../page/Orderconfirm';
import Contact from '../page/Contact';
import Myorder from '../page/Myorder';
import Cart from '../page/Cart';
import Adminupdatedproduct from '../page/Adminupdateproduct';
import Adminorderstatus from '../page/Adminorderstatus';
import Adminordercheck from '../page/Adminordercheck';
import AdminCreateProduct from '../page/AdminCreateProduct';
import AdminAllproduct from '../page/AdminAllproduct';
import EditProductDetail from '../page/EditProductDetail';

// const PUBLIC = [
//   { path: '/login', component: '' },
//   { path: '/register', component: '' },
//   {},
// ];
// const AUTH = [{ path: '/', component: '' }];

// const route = {
//   admin: [
//     {
//       path: '/',
//       component: 'Home-admin',
//     },
//     {
//       path: '/admin-product-update',
//       component: Adminupdatedproduct,
//     },
//     {
//       path: '/admin-orderstatus',
//       component: Adminorderstatus,
//     },
//     {
//       path: '/admin-ordercheck',
//       component: Adminordercheck,
//     },
//   ],
//   guest: [
//     {
//       path: '/',
//       component: Login,
//     },
//     { path: '/register', component: Register },
//     {
//       redirect: '/login',
//     },
//   ],
//   user: [
//     {
//       path: '/',
//       component: Home,
//     },
//     {
//       redirect: '/',
//     },
//   ],
// };

const route = {
  guest: [
    {
      path: '/productname/:id',
      component: Productdetail,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register"',
      component: Register,
    },
    {
      path: 'allproducts',
      component: Allproduct,
    },
    {
      path: '/importproducts',
      component: Importproduct,
    },
    {
      path: '/localproducts',
      component: Localproduct,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/',
      component: Homepage,
    },
  ],
  user: [
    {
      path: '/productname/:id',
      component: Productdetail,
    },
    {
      path: '/login"',
      component: Login,
    },
    {
      path: 'allproducts',
      component: Allproduct,
    },
    {
      path: '/importproducts',
      component: Importproduct,
    },
    {
      path: '/localproducts',
      component: Localproduct,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/editcart/:productId/:cartId',
      component: EditProductDetail,
    },
    {
      path: '/payment',
      component: Payment,
    },
    {
      path: '/delivery',
      component: Delivery,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/myorder',
      component: Myorder,
    },
    {
      path: '/confirm',
      component: Orderconfirm,
    },
    {
      path: '/',
      component: Homepage,
    },
  ],
  admin: [
    {
      path: '/admin-create-product',
      component: AdminCreateProduct,
    },
    {
      path: '/admin-product-update/:id',
      component: Adminupdatedproduct,
    },
    {
      path: '/admin-orderstatus',
      component: Adminorderstatus,
    },
    {
      path: '/admin-ordercheck/:id',
      component: Adminordercheck,
    },
    {
      path: '//admin-allproducts',
      component: AdminAllproduct,
    },
    {
      path: '/login"',
      component: Login,
    },
    {
      path: '/',
      component: Homepage,
    },
  ],
};
export { route };
