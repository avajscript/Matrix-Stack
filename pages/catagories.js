import React from 'react';
import styled from 'styled-components';
import Catagories from '../components/catagories/Catagory';
import COLORS from '../Data/colors';
const CatagoryCont = styled.div``;

const CatagoryPage = () => {
  return (
    <CatagoryCont>
      <Catagories colors={COLORS} />
    </CatagoryCont>
  );
};

export default CatagoryPage;
