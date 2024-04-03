import './App.css';

import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import AdminPage from './pages/Admin';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />

        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
