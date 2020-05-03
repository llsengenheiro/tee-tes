import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  margin-left: 14px;

  li {
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 14px;

    img {
      align-self: center;
      max-width: 233px;
      height: 233px;
      border: 3px solid #cedefd;
      border-radius: 5px;
    }
  }
`;

export const CartShirt = styled.div`
  width: 261px;
  height: 394px;
  background: #f0f5fe;
  padding: 14px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span`
  margin: 14px 0;
  font-weight: bold;
  font-size: 20px;
  color: #1241a1;
`;

export const Sizes = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Size = styled.div`
  display: flex;
  height: 27px;
  border: 3px solid #cedefd;
  border-radius: 39px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 0px 10px 0 0;
`;
export const TextSize = styled.span`
  color: #4882f7;

  font-size: 12px;
`;

export const BtnAddCart = styled.button`
  width: 233px;
  height: 39px;
  margin-top: 14px;
  background: #4882f7;
  border-radius: 5px;
  border: none;
`;

export const TextBtn = styled.span`
  font-weight: bold;
  font-size: 16px;

  color: #f0f5fe;
`;
