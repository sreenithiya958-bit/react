import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer, useEffect } from "react";


function App() {
  const productsData = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphone" },
    { id: 4, name: "Keyboard" },
  ];

  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  // Filter products
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Product List</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Conditional Rendering */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className={hoveredId === product.id ? "active" : ""}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
