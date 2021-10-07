import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>Tradir BeerShop</Title>
      <MoveBtn
        onClick={() => {
          history.push('/beerlist');
        }}
      >
        move to
        <Strong>BeerList</Strong>
      </MoveBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: 'Carter One', cursive;
  letter-spacing: 1px;
  color: #2e0019;
`;

const MoveBtn = styled.button`
  width: 300px;
  padding: 12px 0;
  border-radius: 30px;
  font-size: 28px;
  background: #8af7ae;
  color: #2c2c2c;
  border: none;
  cursor: pointer;
  font-family: 'Nanum Pen Script', cursive;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background: #96fbc4;
    color: #000;
    font-size: 28.5px;
    transform: translateY(1px);
    transition: all 250ms ease-in-out;
  }
`;

const Strong = styled.span`
  font-weight: 700;
  margin-left: 10px;
`;

export default Home;
