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


// function App() {

//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Mobile" },
//     { id: 3, name: "Watch" }
//   ];

//   const [search, setSearch] = useState("");

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>

//       <h1>Product List</h1>

//       <input
//         type="text"
//         placeholder="Search product"
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {
//         filteredProducts.length > 0 ? (

//           filteredProducts.map((item) => (
//             <div key={item.id} className="box">
//               {item.name}
//             </div>
//           ))

//         ) : (

//           <h2>No products available</h2>

//         )
//       }

//     </div>
//   );
// }

// export default App;

// import TextInput from "./TextInput";

// function App() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [data, setData] = useState(null);

//   function handleSubmit(e) {

//     e.preventDefault();

//     setData({
//       name,
//       email,
//       password
//     });
//   }

//   function clearForm() {
//     setName("");
//     setEmail("");
//     setPassword("");
//   }

//   const isValid =
//     name !== "" &&
//     email.includes("@") &&
//     password !== "";

//   return (
//     <div>

//       <h1>Signup Form</h1>

//       <form onSubmit={handleSubmit}>

//         <TextInput
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br /><br />

//         <TextInput
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br /><br />

//         <TextInput
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br /><br />

//         <button type="submit" disabled={!isValid}>
//           Submit
//         </button>

//         <button type="button" onClick={clearForm}>
//           Clear
//         </button>

//       </form>

//       <hr />

//       <h2>Preview</h2>

//       {data && (
//         <div>
//           <p>Name: {data.name}</p>
//           <p>Email: {data.email}</p>
//           <p>Password: {data.password}</p>
//         </div>
//       )}

//     </div>
//   );
// }

// export default App;
import UserTask from "./UserTask";

function App() {
  return (
      <UserTask />
  
  );
}

export default App;