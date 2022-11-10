import { Route, Routes } from 'react-router-dom';

import Home from './components/home.comp';
import Menu from './components/menu.comp';

import Users from './user/users.comp'
import EditProfile from './user/edit-profile.comp'

import NewShop from './shop/new-shop.comp';
import EditShop from './shop/edit-shop.comp';
import MyShops from './shop/my-shops.comp';
import Shops from './shop/shops.comp';
import Shop from './shop/shop.comp';

import SignUp from './user/sign-up.comp'
import Login from './auth/login.comp';
import RequireAuth from './auth/require-auth.comp';
import Profile from './user/profile.comp';
import Product from './product/product.comp';

export default function MainRouter() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />
        <Route path="/user/:userId" element={<Profile />} />

        <Route path="/product/:productId" element={<Product />} />
        <Route path="/shops/all" element={<Shops />} />
        <Route path="/shops/:shopId" element={<Shop />} />

        {/* this route must be Private */}
        <Route element={<RequireAuth />}>
          <Route path="/user/edit/:userId" element={<EditProfile />} />
          <Route path="/seller/shop/edit/:shopId" element={<EditShop />} />
          <Route path="/seller/shop/new" element={<NewShop />} />
          <Route path="/seller/shops" element={<MyShops />} />
        </Route>
        <Route path="*" element={<>Error Page</>} />
      </Routes>      
    </div>
  );
}
