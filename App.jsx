import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useReducer, useEffect } from "react";
import Mode from "./Mode";

function App() {
  return (
    <div>
      <Mode />
    </div>
  );
}

export default App;
