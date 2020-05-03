import React, { useState, useEffect } from 'react';
import arrayList from '../../util/arrayList';
import {
  ProductList,
  CartShirt,
  Description,
  Sizes,
  Size,
  TextSize,
  BtnAddCart,
  TextBtn,
} from './styles';

export default function List() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    setShirts(arrayList);
  }, []);

  return (
    <ProductList>
      {shirts.map((shirts) => (
        <li key={shirts.color}>
          <CartShirt>
            <img src={shirts.path} />
            <Description>{`Tes-tee ${shirts.color} cotton shirt`}</Description>
            <Sizes>
              {shirts.sizes.map((sizes) =>
                sizes.avaible ? (
                  <Size key={sizes.name}>
                    <TextSize>{sizes.name}</TextSize>
                  </Size>
                ) : null
              )}
            </Sizes>
            <BtnAddCart>
              <TextBtn>Add to cart</TextBtn>
            </BtnAddCart>
          </CartShirt>
        </li>
      ))}
    </ProductList>
  );
}
