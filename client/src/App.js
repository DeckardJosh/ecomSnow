import './App.css';

import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
