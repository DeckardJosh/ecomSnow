import './App.css';

import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';

import AdminLoginPage from './pages/AdminLogin';
import AdminPage from './pages/Admin';
import AdminAddProductPage from './pages/AdminAddProduct';
import AdminDeleteProductPage from './pages/AdminDeleteProductPage';
import AdminEditProductPage from './pages/AdminEditProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />

        <Route path='/auth' element={<AdminLoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/admin/products/add' element={<AdminAddProductPage />} />
        <Route path='/admin/products/delete/:id' element={<AdminDeleteProductPage />} />
        <Route path='/admin/products/edit/:id' element={<AdminEditProductPage />} />
      </Routes>
    </>
  );
}

export default App;
