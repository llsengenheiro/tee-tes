import React from 'react';

import logo from '../../assets/logo/logo.svg';
import cart from '../../assets/icons/cart.svg';
import menu from '../../assets/icons/hamburger.svg';
import search from '../../assets/icons/search.svg';

import { Container, MenuLogo, Logo, Search, Cart } from './styles';

export default function Header() {
  return (
    <Container>
      <MenuLogo>
        <img src={menu} alt="Menu" />
        <Logo src={logo} alt="Tee-Tes" />
      </MenuLogo>

      <Search>
        <img src={search} alt="Menu" />
        <input type="search" placeholder="Looking for something?" />
      </Search>

      <Cart>
        <div>
          <img src={cart} alt="My Cart" />
          <span>My Cart</span>
        </div>
      </Cart>
    </Container>
  );
}
