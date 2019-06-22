import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenu = styled.ul`
  display: flex;
`;




const Menu = () => {
  return (
    <StyledMenu>
      <MenuItem>
        <a href="/">HOME</a>
      </MenuItem>
      <MenuItem>
        <a href="/page1"> Page 1</a>
      </MenuItem>
      <MenuItem>
        <a href="/page2"> Page 1</a>
      </MenuItem>
      <MenuItem>
        <a href="/page3"> Page 1</a>
      </MenuItem>
    </StyledMenu>
  );
};
export default Menu;