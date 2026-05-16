import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer, useEffect } from "react";
import Mode from "./Mode";

// function App() {
//   return (
//     <div>
//       <Mode />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Counter />

//       <hr />

//       <Focus />

//       <hr />

//       <Storage />
//     </div>
//   );
// }


function App() {

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Watch" }
  ];

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Product List</h1>

      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        filteredProducts.length > 0 ? (

          filteredProducts.map((item) => (
            <div key={item.id} className="box">
              {item.name}
            </div>
          ))

        ) : (

          <h2>No products available</h2>

        )
      }

    </div>
  );
}

export default App;