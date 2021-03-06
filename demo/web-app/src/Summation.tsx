import React, { useState, ChangeEvent, Dispatch } from 'react';
import { useShockedResponse } from 'shocked';

function handleChange(setter: Dispatch<number>) {
  return (e: ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value) || 0;
    setter(v);
  }
}

export default function Summation() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const sum = useShockedResponse((api) => {
    return api.add([a, b]);
  }, [a, b]);

  return (
    <div>
      <input type="text" value={a} onChange={handleChange(setA)} />
      +
      <input type="text" value={b} onChange={handleChange(setB)} />
      =
      <input type="text" readOnly value={sum === undefined ? 'Calculating..' : sum} />
    </div>
  );
}