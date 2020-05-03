import React from 'react';

import {
  Container,
  Title,
  Colors,
  ColorCircle,
  ColorDiv,
  AreaColors,
  Sizes,
  AreaSizes,
  Size,
  TextSize,
} from './styles';

export default function SideBar() {
  return (
    <Container>
      <Colors>
        <Title> Colors</Title>
        <AreaColors>
          <ColorCircle background=" #ffF">
            <div className="colorido">
              <ColorDiv background="#F25A5A " />
              <ColorDiv background="#CE8BED " />
              <ColorDiv background="#77A3FC " />
              <ColorDiv background="#38E893 " />
              <ColorDiv background="#F0E04F " />
              <ColorDiv background="#F59943 " />
            </div>
          </ColorCircle>
          <ColorCircle background=" #ffF" />
          <ColorCircle background=" #000" />
          <ColorCircle background=" #77A3FC" />
          <ColorCircle background=" #F59943" />
          <ColorCircle background=" #F25A5A" />
          <ColorCircle background=" #38E893" />
          <ColorCircle background=" #CE8BED" />
          <ColorCircle background=" #F0E04F" />
        </AreaColors>
      </Colors>

      <Sizes>
        <Title> Sizes</Title>
        <AreaSizes>
          <Size>
            <TextSize> XP</TextSize>
          </Size>
          <Size>
            <TextSize> S</TextSize>
          </Size>
          <Size>
            <TextSize> M</TextSize>
          </Size>
          <Size>
            <TextSize> L</TextSize>
          </Size>
          <Size>
            <TextSize> XL</TextSize>
          </Size>
          <Size>
            <TextSize> XXL</TextSize>
          </Size>
        </AreaSizes>
      </Sizes>
    </Container>
  );
}
