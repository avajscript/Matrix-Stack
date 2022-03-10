import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Cont = styled.div`
.h1{
  color:white;
}
`;
const SearchPage = () => {
  return (
    <Cont>
      <img src="/911.jpg" layout="fixed" width={200} height={200} alt="911" />
    </Cont>
  );
};

export default SearchPage;
