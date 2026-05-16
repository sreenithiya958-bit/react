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

import Counter from "./Counter";
import Focus from "./Focus";
import Storage from "./Storage";

function App() {
  return (
    <div>
      <Counter />

      <hr />

      <Focus />

      <hr />

      <Storage />
    </div>
  );
}

export default App;
