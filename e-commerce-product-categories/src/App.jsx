import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

const Products = () => (
  <div>
    <h2>🛒 Products Page</h2>
    <nav>
      <Link to="electronics">Electronics</Link> | {" "}
      <Link to="clothing">Clothing</Link> | {" "}
      <Link to="furniture">Furniture</Link>
    </nav>
    <hr />
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <Outlet />
    </div>
  </div>
);


const Electronics = () => (
  <div>
    <h3>📱 Electronics</h3>
    <ul>
      <li>Mobile</li>
      <li>Laptop</li>
      <li>Headphones</li>
    </ul>
  </div>
);

const Clothing = () => <h3>👕 Clothing Category</h3>;
const Furniture = () => <h3>🪑 Furniture Category</h3>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Link to="/products">Go to Products Page</Link>} />
        <Route path="/products" element={<Products />}>
          <Route path="electronics" element={<Electronics />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="furniture" element={<Furniture />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}