import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 244px;
  height: 283px;
  background: #f0f5fe;
  margin-top: 20px;
  border-radius: 10px;
  padding: 14px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-family: Cabin;
  color: #1241a1;
  font-weight: bold;
`;
export const Colors = styled.div`
  margin-top: 14px;
`;

export const AreaColors = styled.div`
  flex-wrap: wrap;
  margin: 14px 0px;
`;

export const ColorCircle = styled.button`
  border: none;
  margin: 0px 14px 14px 0px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;
export const ColorDiv = styled.div`
  height: 5px;
  background: ${(props) => props.background};
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AreaSizes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`;
export const Size = styled.div`
  display: flex;
  height: 27px;
  border: 3px solid #4882f7;
  border-radius: 39px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 0px 20px 14px 0px;
`;
export const TextSize = styled.span`
  color: #4882f7;
  font-weight: bold;
  font-size: 12px;
`;
