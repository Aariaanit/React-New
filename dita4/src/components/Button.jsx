import React from 'react'
import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
  return (
    <div>

        <button onClick={() => setCount(count + 1)}>Rrite</button>
        <button onClick={() => setCount(count - 1)}>Zvogloje</button>
        <p>Count: {count}</p>
    </div>
  )
}
export default Button