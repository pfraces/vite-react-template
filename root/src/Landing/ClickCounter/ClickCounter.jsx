import { useState } from 'react';
import { scope } from './ClickCounter.module.css';

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className={scope}
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      count is {count}
    </button>
  );
}
