import React from 'react';
import List from '../List';
import SideBar from '../SideBar';

import { Container } from './styles';

export default function ProductList() {
  return (
    <Container>
      <SideBar />
      <List />
    </Container>
  );
}
