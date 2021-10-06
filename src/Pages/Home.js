import React from 'react';
// import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <>
      <div>홈페이지입니다.</div>
      <button
        onClick={() => {
          history.push('/beerlist');
        }}
      >
        BeerList로 이동하기
      </button>
    </>
  );
};

export default Home;
