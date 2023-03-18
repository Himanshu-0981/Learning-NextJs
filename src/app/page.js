'use client';

import { useState } from "react";
const Home = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      Hello {counter}
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </div>
  )
}
export default Home;