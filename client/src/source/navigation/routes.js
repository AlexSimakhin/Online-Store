import { book } from './book';
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Shop from './../pages/Shop';
import Auth from './../pages/Auth';
import DevicePage from './../pages/DevicePage';

export const authRoutes = [
  {
    path: book.admin,
    Component: Admin
  },
  {
    path: book.basket,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: book.shop,
    Component: Shop
  },
  {
    path: book.login,
    Component: Auth
  },
  {
    path: book.registration,
    Component: Auth
  },
  {
    path: book.device + '/:id',
    Component: DevicePage
  }
];