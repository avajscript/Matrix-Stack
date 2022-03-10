import React from 'react';
import styled from 'styled-components';

const CatagoryCont = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &:hover {
    h2 {
      color: white;
    }
  }
`;

const Title = styled.h2`
  color: ${(props) => props.colors.greenA};
  background-color: ${(props) => props.colors.blackA};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
`;
export default function Catagory(props) {
  return (
    <CatagoryCont url={props.url}>
      <Title colors={props.colors}> {props.title} </Title>
    </CatagoryCont>
  );
}
