import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

const Title = styled.h1`
  background: red;
`;

const HomePage = () => {
  return (
    <div onClick={() => console.log('click')}>
      <Menu />
      <Title>I'm a fancy title</Title>
    </div>
  );
};

export default HomePage