import './App.css';

import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
