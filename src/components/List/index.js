import React, { useState, useEffect } from 'react';
import arrayList from '../../util/arrayList';
import { ProductList } from './styles';

export default function List() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    setShirts(arrayList);
  }, []);

  return (
    <ProductList>
      {shirts.map((shirts) => (
        <li key={shirts.color}>
          <img src={shirts.path} />
        </li>
      ))}
    </ProductList>
  );
}
