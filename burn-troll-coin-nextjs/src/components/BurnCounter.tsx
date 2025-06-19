import { useState } from 'react';

const BurnCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="text-center my-4">
      <h2 className="text-xl">🔥 Tokens Burned This Session:</h2>
      <p className="text-3xl">{count}</p>
      <button onClick={increment} className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
        Simulate Burn
      </button>
    </div>
  );
};

export default BurnCounter;