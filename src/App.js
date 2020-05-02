import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductList />
    </>
  );
}

export default App;
