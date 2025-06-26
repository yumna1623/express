// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css'; // ✅ Import external CSS

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/product')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="product-list-container">
      <h1 className="title">Product Catalog</h1>

      <div className="filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >



          <option>All</option>
          <option>Electronics</option>
          <option>Furniture</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
