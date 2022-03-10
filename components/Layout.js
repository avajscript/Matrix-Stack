import React from 'react';
import styled from 'styled-components';
import Navbar from './navigation/Navbar';
import COLORS from '../Data/colors';
const Container = styled.div`
  
`;

const Main = styled.main`

`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar colors={COLORS} />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
