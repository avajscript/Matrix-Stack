import React from 'react';
import styled from 'styled-components';
import Catagories from '../components/catagories/Catagories';
import COLORS from '../Data/colors';
import Data from '../Data/catData';
const CatagoryCont = styled.div``;

const CatagoryPage = () => {
  return (
    <CatagoryCont>
      <Catagories data={Data} colors={COLORS} />
    </CatagoryCont>
  );
};

export default CatagoryPage;
