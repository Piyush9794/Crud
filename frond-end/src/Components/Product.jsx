// // import React from "react";
import UserContext from "./UserContext";
// const Product = (xyz) => {
//   return (
//     <div>
//       <h1>{xyz.name}</h1>
//       <h1>{xyz.lastName}</h1>
//       <h1>{xyz.age}</h1>
//     </div>
//   );
// };

// export default Product;

import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} />

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </>
  );
};

export default App;