import Adminordercheck from '../page/Adminordercheck';
import Adminorderstatus from '../page/Adminorderstatus';
import Adminupdatedproduct from '../page/Adminupdateproduct';

const PUBLIC = [
  { path: '/login', component: '' },
  { path: '/register', component: '' },
  {},
];
const AUTH = [{ path: '/', component: '' }];

const route = {
  admin: [
    {
      path: '/',
      component: 'Home-admin',
    },
    {
      path: '/admin-product-update',
      component: Adminupdatedproduct,
    },
    {
      path: '/admin-orderstatus',
      component: Adminorderstatus,
    },
    {
      path: '/admin-ordercheck',
      component: Adminordercheck,
    },
  ],
  guest: [
    {
      path: '/',
      component: Login,
    },
    { path: '/register', component: Register },
    {
      redirect: '/login',
    },
  ],
  user: [
    {
      path: '/',
      component: Home,
    },
    {
      redirect: '/',
    },
  ],
};

export { route, AUTH, PUBLIC };
