import './App.css';

import {Routes, Route} from "react-router-dom";
import HomePage from './pages/home';
import ProductsPage from './pages/products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductsPage/>} />
      </Routes>
    </>
  );
}

export default App;
