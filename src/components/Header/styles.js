import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 37px;
`;

export const MenuLogo = styled.div`
  margin-left: 24px;
  align-items: center;
  img {
  }
`;

export const Logo = styled.img`
  align-self: center;
  max-width: 142px;
  height: 34px;
  margin-left: 20px;
`;

export const Search = styled.div`
  position: relative;

  img {
    position: absolute;
    top: 12px;
    left: 15px;
  }

  input {
    ::placeholder {
      color: #1241a1;
      opacity: 1;
      font-size: 16px;
    }

    padding-left: 60px;
    width: 521px;
    height: 48px;
    background: #f0f5fe;
    border-radius: 5px;
    border: none;
  }
`;

export const Cart = styled.button`
  display: flex;
  background: #fff;
  border: none;
  height: 48px;
  div {
    display: flex;
    align-items: center;
  }
  span {
    color: #1241a1;
    margin-left: 10px;
    font-weight: bold;
    font-size: 14px;
  }
`;
