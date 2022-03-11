import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Cont = styled.div`
.h1{
  color:white;
}
`;
const DivCont = styled.div`
  background-color: red;
  cursor: pointer;
`;
const SearchPage = () => {
  return (
    <Cont>
      <DivCont>
        <Image
          alt="Mountains"
          src="/911.jpg"
          layout="fixed"
          objectFit="cover"
          width={500}
          height={500}
        />
      </DivCont>
    </Cont>
  );
};

export default SearchPage;
