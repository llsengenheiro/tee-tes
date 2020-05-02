import React from 'react';

import logo from '../../assets/logo/logo.svg';
import cart from '../../assets/icons/cart.svg';

import { Container, MenuLink, Logo, Search, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <MenuLink />
      <Logo>
        <img src={logo} alt="RocketShoes" />
      </Logo>
      <Search>
        <input />
      </Search>
      <Cart>
        <img src={cart} alt="My Cart" />
        <small>My Cart</small>
      </Cart>
    </Container>
  );
}
